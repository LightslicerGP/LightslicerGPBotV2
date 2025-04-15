module.exports = [
  {
    name: "bump channel set",
    code: `
      $clientTyping
      $reply[$messageID;true]



      $setGuildVar[DisboardChannel;$message;$guildID]
  
      $color[#80bfff]
      $title[Bump Channel has been set!]
      $description[
          Bump channel set to \`$message\`
      ]

      $onlyIf[$guildChannelExists[$guildID;$findChannel[$message;false]]==true;Guild does not exist!]
    `,
  },
];
