module.exports = [
  {
    name: "bump channel",
    code: `
      $clientTyping
      $reply[$messageID;true]


  
      $color[#80bfff]
      $title[Bump Channel]
      $description[
          The current bump channel is $getGuildVar[DisboardChannel;$guildID]
      ]
      `,
  },
];
