console.log("Vue OK!", Vue);

Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const root = new Vue({
  el: "#root",
  data: {
    currentMessage: 0,
    showCurtain: "d-none",
    search: "",
    personalMessage: "",
    currenContact: 0,
    d: dayjs().format("DD/MM/YYYY hh:mm:ss"),
    user: { name: "Beatrice Rossi", avatar: "_io" },
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "received",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Giorgio",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    setSelected(index) {
      this.currenContact = index;
    },
    isChecked(index) {
      return index === this.currenContact;
    },
    isSentMessage() {
      if (this.personalMessage !== "") {
        const message = {
          date: this.d,
          text: this.personalMessage,
          status: "sent",
        };

        this.contacts[this.currenContact].messages.push(message);
      }
      this.personalMessage = "";

      const time = setTimeout(this.isAnswerMessage, 2000);
    },
    isAnswerMessage() {
      const answer = {
        date: this.d,
        text: "Per capire se ho capito",
        status: "received",
      };
      this.contacts[this.currenContact].messages.push(answer);
    },
    searchContact() {
      // const search = this.search.toLowerCase();
      // this.contacts.forEach((contact) => {
      //   contact.visible = contact.name.toLowerCase().includes(search);
      // });

      for (let i = 0; i < this.contacts.length; i++) {
        if (!this.contacts[i].name.toLowerCase().includes(this.search)) {
          this.contacts[i].visible = false;
        }
        if (this.search === "") {
          this.contacts[i].visible = true;
        }
      }
    },
    curtainClicked(index) {
      this.currentMessage = index;

      if (this.showCurtain === "d-none") {
        this.showCurtain = "d-block";
      } else {
        this.showCurtain = "d-none";
      }
    },
    deletMessage(index) {
      this.contacts[this.currenContact].messages.splice(index, 1);
      // this.contacts[currenContact].messages = this.contacts[
      //   currenContact
      // ].messages.filter((message, i) => {
      //   if (message[i] === currentMessage) return true;
      //   return false;
      // });
    },
  },
});
