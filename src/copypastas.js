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
    {title:"byun", text: "l was hanging out at Dreamhack AtIanta waiting in Iine for the bathroom...when l noticed "+
                         "ByuN in the Iine for the urinaIs next to me! lt was eventuaIIy our turn to do our deeds to "+
                         "nature, and during then the tension—boy did it mount! ByuN approached the urinaI with a "+
                         "confident stride, a sense of purpose and a caIm urgency squared him up against the porceIain. "+
                         "l, but a common man, matched his step and the feeIings of my heart became unpaIpabIe. My stream "+
                         "began with a bit of effort...not the same for the King of Reapers; the power of his stream "+
                         "reverberated through the waIIs of the Georgia WorId Congress Center. Decades of a refined, "+
                         "and weII deveIoped kiIIer instict, and pixeI-perfect pointer precision were a bright, and "+
                         "inexorabIe sight to feeI from the staII his adjacent. My wee wiIIy, and my disgustingIy simpIe, "+
                         "and primitive desire to reIieve its backing bIadder was no match for the for the Champion of "+
                         "the RebeIIion. l Ieft the staII and the bathroom thinking to myseIf, \"Are urinaIs in Korea this high?\""
    },//16
    {title:"donted", text: "harstem I sent you a replay like 14 months ago complaining about the carrier. a few "+
                             "weeks later I lost my job, one of my friends found out she was having a baby and we "+
                             "were all very excited. i visited some of my girlfriends friends in atlanta and we "+
                             "saw the aquarium. I got a new job, it pays better but im very busy. I made some new "+
                             "friends, got started on some new projects. eventually they nerfed the thing I was "+
                             "complaining about, it was carriers. they aren't such a problem anymore. that friend "+
                             "I mentioned, she had her baby. i'm so happy for her, her and her husband will be "+
                             "fantastic parents. I don't really play much anymore, but I still watch your videos "+
                             "while I work. I know its on an old patch and its a replay of a diamond player fighting "+
                             "6 base carrier with 5 base hydra but can you PLEASEEEE make a video on it. i once donted "+
                             "you 500 euros on instagram if you remember"
    },//17
    {title:"brightest minds", text: "Some of the brightest minds in all of Starcraft are here to share their knowledge "+
                            "on this Discord chat. I strongly encourage any new players from trying to gain as "+
                            "much knowledge as possible from this great opportunity. For instance, I’ve been a "+
                            "backseat GM player for 20 seasons in a row, and at this point I probably know as "+
                            "much about the game as Serral (if not more)"},
    //19
    {title:"petty insult", text: "There's so much of this pure nonsense.  People trying to make everything into a "+
                                 "petty insult.  Why don't you just go play fortnite?  That is the game for this "+
                                 "mentality.  It's just a waste of everyone's time.  It's the discord equivalent "+
                                 "of people having nothing to offer so they just float their buildings to the "+
                                 "corner.  I won't be here when it happens, but 9 of the next 10 comments will "+
                                 "prove my point."},
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
    {title:"free country", text: "Yes. LITERALLY yes.\n\n"+

                                 "This is a free country. I am allowed to do what I want. There is no law in "+
                                 "the USA or in the universe saying that I must do X Y or Z.\n\n"+
                                 
                                 "When I first said this people's heads exploded.\n\n"+

                                 "After some time, I learned, recognized, and admitted, \"yeah it probably makes "+
                                 "sense to have optimized builds at higher levels of play.\" But it is still "+
                                 "possible to have fun and play things that are not 100% pro approved.\n\n"+

                                 "ALSO, I will never force builds down the throat of a new player who has barely "+
                                 "touched starcraft. I refuse to do that and turn them off from the game forever, "+
                                 "especially if they literally tell me \"I don't want to focus on a build right "+
                                 "now I think it's too hard.\""
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