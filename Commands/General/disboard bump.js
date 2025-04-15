module.exports = [
  {
    name: "$alwaysExecute",
    code: `
    $setTimeout[DiscordBumpMessage;2h;{"channelID": "$channelID"}]

    $reply[$messageID;true]
    $clientTyping
    
    

    $color[#80bfff]
    $description[
      Alright, I will ping the dbump role in 2 hours!
    ]

    $onlyIfMessageContains[$getEmbed[$channelID;$messageID;1;description];Bump done! :thumbsup:
Check it out [on DISBOARD](https://disboard.org/server/586543238589054997).]
    $onlyIf[$channelID==$findNumbers[$getGuildVar[DisboardChannel;$guildID]]]
    $onlyIf[$authorID!=978302436550774784]
    `,
  },
  {
    name: "DiscordBumpMessage",
    type: "timeout",
    code: `
    $reply[$messageID;true]
    
    

    $channelSendMessage[$timeoutData[channelID];
      Okay <@&972600952655872120>, you can now do discord bump!
    ]
    `,
  },
];

/* v1
{
  name: "$alwaysExecute",
  code: `
    $reply[$messageID;true]
    $clientTyping

    $sendMessage[ok <@&972600952655872120> v1]
    $wait[2h]



    $reply[$messageID;true]
    $clientTyping

    $sendMessage[Alright, I will ping the dbump role in 2 hours! v1]

    $onlyIfMessageContains[$getEmbed[$channelID;$messageID;1;description];Bump done! :thumbsup:
Check it out [on DISBOARD](https://disboard.org/server/586543238589054997).]
    $onlyIf[$channelID==$findNumbers[$getGuildVar[DisboardChannel;$guildID]]]
    $onlyIf[$authorID!=978302436550774784]
  `,
}
*/
