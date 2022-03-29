<template>
  <div class="chattingBody">
    <div class="chat">
      <div class="person">
        <form id="loginForm">
          <div class="col" style="min-width: 433px; max-width: 443px">
            <div class="card" style="margin-top: 0px; margin-bottom: 0px">
              <div
                class="row card-content"
                style="margin-bottom: 0px; margin-top: 10px"
              >
                <div class="input-field">
                  <label>User ID</label>
                  <input type="text" placeholder="User ID" id="userID" />
                </div>
                <div class="row">
                  <div>
                    <button @click="login()" type="button" id="login">
                      LOGIN
                    </button>
                    <button @click="logout()" type="button" id="logout">
                      LOGOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <hr />
        <div id="log" class="log"></div>
      </div>
    </div>
    <div class="input-field channel-padding">
      <input
        class="message"
        type="text"
        placeholder="peer message"
        id="peerMessage"
      />
      <button
        class="sendMessage btn btn-success"
        @click="send_peer_message()"
        type="button"
        id="send_peer_message"
      >
        SEND
      </button>
    </div>
  </div>
</template>
<script>
import AgoraRTM from "agora-rtm-sdk";

let options = {
  uid: "",
  token: "",
};

// appid from agora.io
const appID = "5aead9c470a1420e8d56fc675afb260b";
// Your rtm token
options.token = "5aead9c470a1420e8d56fc675afb260b";

const client = AgoraRTM.createInstance(appID);
// Display Message From Peer
client.on("MessageFromPeer", function (message, peerId) {
  let str = JSON.stringify(message.text);
  document
    .getElementById("log")
    .appendChild(document.createElement("div"))
    .append(peerId + " : " + str.substr(1, str.length - 2));
});
// Display connection state changes
client.on("ConnectionStateChanged", function (state, reason) {
  console.log("State changed To: " + state + " Reason: " + reason);
});
export default {
  name: "ChattingBody",
  props: ["first_name"],
  data: function () {
    return {
      channel: "main",
    };
  },
  methods: {
    login: async function () {
      options.uid = document.getElementById("userID").value.toString();
      await client.login(options);
    },
    logout: async function () {
      await client.logout();
    },

    send_peer_message: async function () {
      //the 3 main variables
      let peerId = this.first_name;
      let peerMessage = document.getElementById("peerMessage").value.toString();
      let userID = document.getElementById("userID").value.toString();

      await client
        .sendMessageToPeer({ text: peerMessage }, peerId)
        .then((sendResult) => {
          if (sendResult.hasPeerReceived) {
            document
              .getElementById("log")
              .appendChild(document.createElement("div"))
              .append(userID + " : " + peerMessage);
          } else {
            let message = document.createElement("div");
            document
              .getElementById("log")
              .appendChild(message)
              .append(peerMessage);
            message.setAttribute("class", "mymessages");
          }
        });
    },
  },
};
</script>
<style lang="scss">
.chattingBody {
  margin: 1% auto 1% auto;
  width: 100%;
  .chat {
    width: 96.5%;
    height: 600px;
    margin: auto;
    background-color: #242b3d;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 0.25rem;
    overflow-y: scroll;
    /* Scrollbar Styling */
    &::-webkit-scrollbar {
      width: 8px;
      opacity: 0.9;
    }
    &::-webkit-scrollbar-track {
      background-color: #28304666;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-border-radius: 15px;
      border-radius: 15px;
      background: #283046;
    }

    .log {
      color: #fff;
      width: 90%;
      margin: auto;
      .mymessages {
        text-align: left;
        background-color: #565288;
        display: table;
        margin: 10px 0;
        padding: 12px;
        border-bottom-right-radius: 16px;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
      }
    }
  }
  .message {
    width: 90%;
    padding: 8px;
    border-radius: 0.25rem;
  }
  .sendMessage {
    width: 6.5%;
  }
}
</style>
