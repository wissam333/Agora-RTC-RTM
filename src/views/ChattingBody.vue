<template>
  <div class="chattingBody">
    <div id="chat" class="chat">
      <h3 class="friend-name">{{ first_name }}</h3>
      <div class="person">
        <form id="loginForm">
          <div>
            <div class="login" style="margin-top: 0px; margin-bottom: 0px">
              <div class="content" style="margin-bottom: 0px; margin-top: 10px">
                <div class="input-field">
                  <label>User ID</label>
                  <input type="text" placeholder="User ID" id="userID" />
                </div>
                <div>
                  <div>
                    <button @click="login()" type="button" id="login">LOGIN</button>
                    <button @click="logout()" type="button" id="logout">LOGOUT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <hr />
        <div id="log" class="log">
          <div class="message__chat">
            <div class="message__outer">
              <div class="message__avatar"></div>
              <div id="message__inner" class="message__inner">
                <div class="message__actions">
                  <ul class="menu"></ul>
                </div>
                <div class="message__spacer"></div>
              </div>
              <div class="message__status">
                <span class="avatar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="input-field channel-padding">
      <form action>
        <input class="message" type="text" placeholder="peer message" id="peerMessage" />
        <input
          class="sendMessage btn btn-success"
          @click="send_peer_message()"
          type="button"
          id="send_peer_message"
          value="SEND"
        />
      </form>
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
client.on("MessageFromPeer", function (message) {
  let str = JSON.stringify(message.text);
  let hismessages = document.createElement("div");
  document
    .getElementById("message__inner")
    .appendChild(hismessages)
    .append(str.substr(1, str.length - 2));
  hismessages.setAttribute("class", "message__bubble hismessages");
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
            let message = document.createElement("div");
            document
              .getElementById("message__inner")
              .appendChild(message)
              .append(peerMessage);
            message.setAttribute("class", "message__bubble mymessages");
          } else {
            let message = document.createElement("div");
            document
              .getElementById("message__inner")
              .appendChild(message)
              .append(peerMessage);
            message.setAttribute("class", "message__bubble mymessages");
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
    width: 94.5%;
    height: 550px;
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
      .message__chat {
        .message__outer {
          display: flex;
          .message__avatar {
            padding-left: 6px;
            padding-right: 8px;
            img {
              width: 16px;
            }
          }
          .message__status {
            width: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
          }
          .message__inner {
            flex: 1;
            display: flex;
            flex-direction: row-reverse;
            display: flex;
            flex-flow: column wrap;
            .message__actions {
              width: 67px;
              padding-right: 5px;
              flex-shrink: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .message__spacer {
              flex: 1;
            }
            .message__bubble {
              max-width: calc(100% - 67px);
              overflow-wrap: break-word;
              &.mymessages {
                align-self: flex-start;
                width: fit-content;
                background-color: #565288;
                margin: 10px 0;
                padding: 12px;
                border-bottom-right-radius: 16px;
                border-top-right-radius: 16px;
                border-top-left-radius: 16px;
              }
              &.hismessages {
                align-self: flex-end;
                width: fit-content;
                background-color: #565288;
                margin: 10px 0;
                padding: 12px;
                border-bottom-left-radius: 16px;
                border-top-right-radius: 16px;
                border-top-left-radius: 16px;
              }
              /* First message */
              &.message--first {
                border-end-end-radius: 4px;
              }
              /* Middle message */
              &.message--middle {
                border-start-end-radius: 4px;
                border-end-end-radius: 4px;
              }
              /* Last message */
              &.message--last {
                border-start-end-radius: 4px;
              }
            }
          }
        }
      }
    }
  }
  .message {
    padding: 8px;
    border-radius: 0.25rem;
  }
  .sendMessage {
  }
}
</style>
