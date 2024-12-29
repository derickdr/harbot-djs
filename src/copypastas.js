//File for storing copypastas in an array of objects.

const copypastaList = [
    {title:"coffee", text: "As coffee goes from crop to cup, it changes from either yellow or red to green and then brown."
                            +"The color of coffee shows what stage it’s at, with it only being ready for consumption when "
                            +"it’s brown. (Beans never actually become black, although brewed coffee may look black.)"
    },//25
    {title:"piotrwaluckiewicz", text: "absolute high test cc on location, i will forever bow to spirit and Prayge that his testostorone"
                                    + " will be passed on to me"
    },//1
    {title:"carrier", text: "The Carrier is a beautiful, giant golden capital ship that is a defining symbol of the protos"+
                            " race and their high tech approach to dealing with the worlds problems. The Protos are the"+
                            " innovators and disruptors of the StarCraft 2 marketplace. The Carrier is like if Elon musk,"+
                            " Mark Zuckerberg and Peter Thiel combined into a super tech instrument of innovation and creativity "+
                            "that is both wholesome and freaking epic."+
                            
                            "\n\nNot only is the unit iconic, but its fun to see in games as they represent a strong power unit "+
                            "and a challenge for those who face off against it. That being said, the loss of carriers and "+
                            "interceptors has been a deciding factor in protos players losing many games asswell."+
                            
                            "\n\nHarstem: you have posted cringe and you will in fact lose subscriber. The members of "+
                            "the carrier appreciation club are watching and we do have members in Denmark, so watch your "+
                            "next words about our beloved unit carefully..."
    },//2
    {title:"copypastas", text: "Copypastas have always been an integral part of every sports. For example, football fans "+
                                "have always made chants about players that were humorous, aggressive or even supportive. "+
                                "Banning copypastas will only reduce audience interaction. In fact, I think players should "+
                                "be forced to read copypastas during the game just like real life athletes."
    },//3
    {title:"ghosts", text: "To be fair its really hard to control this lategame terran army. You need a hotkey for ghosts "+
                            "to counter lurkers, ghosts to counter hydras, ghosts to counter broodlords, ghosts to counter "+
                            "ultras, ghosts to counter vipers, ghosts to EMP infestors ghosts to nuke economy and ghosts "+
                            "to snipe detection so your ghosts don't die."
    },//4
    {title:"feardragon", text: "I love how fear dragon strikes fear in his fellow casters. Noogying Lowko. Dispensing wet "+
                                "willys to Harstem. Truly he is the villain these scene needs!"
    },//5
    {title:"gaming", text: "\"Gaming\" or egaming for short, is the cultual phenomenon of the 21st century. "+
                            "Billions around the world engage in virtual battles, farming, and lovemaking in an "+
                            "endless journey towards self-discovery. Truly, \"gaming\" is ubiquitous."
    },//6
    {title:"immature", text: "haha people getting angry at a twitch chat and say others are immature, go look at a mirror"},
    //7
    {title:"slowmode", text: "24k viewers and no spam, no pasta, no textwall? that’s incredible, you can see slow mode "+
                             "in action right there! everyone is carefully chosing their words as every sentence has to make impact!"
    },//8
    {title:"as a mod", text: "i apologise for how my comment may have made you feel, as a mod im always out to create a "+
                            "safe and open environment for anyone"
    },//9
    {title:"noob friendly content", text: "Hi Captain, I really enjoyed yout last youtube video :). I hope you keep "+
                                          "embracing more \"noob friendly\" entry level RTS content like tiny war "+
                                          "game and playing terran on the ladder."
    },//10
    {title:"build suggestions", text:"Riff and Esarel, that was NOT what I was looking for, stop with your aggressive "+
                                     "and dishonorable build suggestions. CambatX, I don't even know why you open "+
                                     "your mouth to say such useless things. Curious Jorge, that is not a fucking "+
                                     "build order and I will drop a marauder on your mother's house before I drop a "+
                                     "marauder in the protoss base as a build."
    },//11
    {title:"date", text: "Not gonna be active on Discord tonight. I'm meeting a girl (a real one) in half an hour "+
                         "(wouldn't expect a lot of you to understand anyway) so please don't DM me asking me where "+
                         "I am (im with the girl, ok) you'll most likely get aired because ill be with the girl "+
                         "(again I don't expect you to understand) shes actually really interested in me and its "+
                         "not a situation i can pass up for some meaningless Discord degenerates (because ill be "+
                         "meeting a girl, not that you really are going to understand) this is my life now. "+
                         "Meeting women and not wasting my precious time online, I have to move on from such simple "+
                         "things and branch out (you wouldnt understand)."
    },//12
    {title:"stasis", text: "Sending one Marine forward you just lose one Marine to Stalkers. Scanning ahead you just "+
                           "miss out on 225 minerals of mining. Making a Raven you just end up with a Raven. Stimming "+
                           "into every single Stasis you have all affected Marines protected in one place safe from "+
                           "ambush, minerals from MULEs to make more Marines, and you haven't allowed yourself to be "+
                           "tricked into making any Ravens. Optimal Terran. If that looks dumb it's because the game "+
                           "itself is dumb, and keeps getting dumber as time passes."
    },//13
    {title:"horse", text: "🦄🦄 I have known a lot of SC2 players. Those that enjoy terran are usually horse people. "+
                          "They have a favorite horse breed, have fed a horse, maybe ride horses, definitely enjoy "+
                          "horse sports. Kinda weird. 🦄🦄"
    },//14
    {title:"cannons", text: "I am a nigerian prince and I want to give you 1000s of MMR with my only cannon build, "+
                            "I just need a small loan and your credit card information"
    },//15
    {title:"idiots", text: "if terran and zerg think protoss is the easiest race to be good at, are they mentally "+
                            "deficient compared to protoss players for picking inferior races?"
    },//16
    {title:"harstem", text: "How do you not know the streamer you idiot"
    },//17
    {title:"newton", text: "How do you like them apples?"},
    //19
    {title:"dark hatchery", text: "https://clips.twitch.tv/SteamyVainStorkPRChase-E-PU1S26ZY2HSSoQ"},
    //20
    {title:"pasta", text: "Jeffrey Steingarten asserts that Arabs introduced pasta in the Emirate of Sicily in "+
                          "the ninth century, mentioning also that traces of pasta have been found in ancient "+
                          "Greece and that Jane Grigson believed the Marco Polo story to have originated in the "+
                          "1920s or 1930s in an advertisement for a Canadian spaghetti company."
    },//21
    {title:"broodwar", text: "If SC1 was so good they wouldn't have needed to make a second game don't @ me"},
    //22
    {title:"soo", text: "I met soO at the local bookies once, betting on horses. He said the experience makes "+
                        "him a better zerg, as every time he loses money, he needs the tournmament win so he "+
                        "can bet on more horses. Very smart guy, shame about the gambling though"
    },//23
    {title:"goldengate", text: "The golden gate bridge is called that because the bridge is made from gold "+
                                "and then got painted red"
    },//24
    {title:"mmr", text: "imagine an mmr based on fun. after each game ur opponent rates how fun your "+
                        "gameplay was. the higher your opp rates you, the higher up in rank you go. "+
                        "eventually the most fun gamers are having an unbelievable amount of fun, "+
                        "and everyone else is playing protoss"
    },//25
];
/*
{title:"", text: ""
    },
*/
module.exports = copypastaList;