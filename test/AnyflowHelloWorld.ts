import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";

describe("AnyflowHelloWorld", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployHelloWorld() {
    const helloMessage = "Hello, World!";

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const anyflowHelloWorld = await hre.viem.deployContract("AnyflowHelloWorld", [helloMessage]);

    const publicClient = await hre.viem.getPublicClient();

    return {
      helloMessage,
      anyflowHelloWorld,
      owner,
      otherAccount,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should set the right hello message", async function () {
      const { anyflowHelloWorld, helloMessage } = await loadFixture(deployHelloWorld);

      expect(await anyflowHelloWorld.read.helloMessage()).to.equal(helloMessage);
    });
  });

  describe("Hello World", function () {
    describe("call hello()", function () {
      it("Shouldn't fail", async function () {
        const { anyflowHelloWorld } = await loadFixture(
          deployHelloWorld
        );

        await expect(anyflowHelloWorld.write.hello()).to.be.fulfilled;
      });
    });

    describe("Events", function () {
      it("Should emit a Hello event on hello()", async function () {
        const { anyflowHelloWorld, publicClient, owner, helloMessage } =
          await loadFixture(deployHelloWorld);

        const hash = await anyflowHelloWorld.write.hello();
        await publicClient.waitForTransactionReceipt({ hash });

        // get the withdrawal events in the latest block
        const helloEvents = await anyflowHelloWorld.getEvents.Hello();
        expect(helloEvents).to.have.lengthOf(1);
        expect(helloEvents[0].args._address?.toLocaleLowerCase()).to.eq(owner.account.address.toLocaleLowerCase());
        expect(helloEvents[0].args._message).to.equal(helloMessage);
        expect(helloEvents[0].args._count).to.equal(1n);
      });
    });
  });
});
