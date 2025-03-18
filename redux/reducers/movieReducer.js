const initialState = {
    movies: {
        popular: {
            title: "Popular",
            movie_data: [
                {
                    "adult": false,
                    "backdrop_path": "/gFFqWsjLjRfipKzlzaYPD097FNC.jpg",
                    "genre_ids": [
                        28,
                        53,
                        80
                    ],
                    "id": 1126166,
                    "original_language": "en",
                    "original_title": "Flight Risk",
                    "overview": "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
                    "popularity": 25.919,
                    "poster_path": "/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
                    "release_date": "2025-01-22",
                    "title": "Flight Risk",
                    "video": false,
                    "vote_average": 6.1,
                    "vote_count": 469
                },
                {
                    "adult": false,
                    "backdrop_path": "/87GU2ifjNYtgYtcRH1NNH1P4ODo.jpg",
                    "genre_ids": [
                        18,
                        35,
                        10749
                    ],
                    "id": 1064213,
                    "original_language": "en",
                    "original_title": "Anora",
                    "overview": "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
                    "popularity": 20.921,
                    "poster_path": "/qh8m8Udz0sCa5gy9VaqfHPh0yPM.jpg",
                    "release_date": "2024-10-14",
                    "title": "Anora",
                    "video": false,
                    "vote_average": 7.1,
                    "vote_count": 1707
                },
                {
                    "adult": false,
                    "backdrop_path": "/1w8kutrRucTd3wlYyu5QlUDMiG1.jpg",
                    "genre_ids": [
                        12,
                        10751,
                        16
                    ],
                    "id": 762509,
                    "original_language": "en",
                    "original_title": "Mufasa: The Lion King",
                    "overview": "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
                    "popularity": 18.25,
                    "poster_path": "/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
                    "release_date": "2024-12-18",
                    "title": "Mufasa: The Lion King",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 1630
                },
                {
                    "adult": false,
                    "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
                    "genre_ids": [
                        28,
                        878,
                        35,
                        10751,
                        12,
                        14
                    ],
                    "id": 939243,
                    "original_language": "en",
                    "original_title": "Sonic the Hedgehog 3",
                    "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
                    "popularity": 17.029,
                    "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
                    "release_date": "2024-12-19",
                    "title": "Sonic the Hedgehog 3",
                    "video": false,
                    "vote_average": 7.716,
                    "vote_count": 2169
                },
                {
                    "adult": false,
                    "backdrop_path": "/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg",
                    "genre_ids": [
                        10749,
                        878,
                        53
                    ],
                    "id": 950396,
                    "original_language": "en",
                    "original_title": "The Gorge",
                    "overview": "Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.",
                    "popularity": 27.269,
                    "poster_path": "/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
                    "release_date": "2025-02-13",
                    "title": "The Gorge",
                    "video": false,
                    "vote_average": 7.78,
                    "vote_count": 1914
                },
                {
                    "adult": false,
                    "backdrop_path": "/gKqeUlwYiZBDbFU5gT0ev7W3Vzs.jpg",
                    "genre_ids": [
                        53,
                        35,
                        27
                    ],
                    "id": 1013482,
                    "original_language": "en",
                    "original_title": "Borderline",
                    "overview": "A helplessly romantic sociopath escapes from a mental institution and invades the home of a '90s pop superstar. He just wants to be loved; she just wants to survive.",
                    "popularity": 25.005,
                    "poster_path": "/z2yAWt1aAvhxap9mdjlQhXiEJT4.jpg",
                    "release_date": "2025-03-14",
                    "title": "Borderline",
                    "video": false,
                    "vote_average": 5,
                    "vote_count": 6
                },
                {
                    "adult": false,
                    "backdrop_path": "/6J259Zuq09Bt2PLUNeTS5a3DwLZ.jpg",
                    "genre_ids": [
                        28,
                        53
                    ],
                    "id": 1212855,
                    "original_language": "en",
                    "original_title": "Fight or Flight",
                    "overview": "A mercenary takes on the job of tracking down a target on a plane but must protect her when they're surrounded by people trying to kill both of them.",
                    "popularity": 15.053,
                    "poster_path": "/x4nWnfgJvL045rcUCSJzfgIIY9i.jpg",
                    "release_date": "2025-03-13",
                    "title": "Fight or Flight",
                    "video": false,
                    "vote_average": 6.4,
                    "vote_count": 18
                },
                {
                    "adult": false,
                    "backdrop_path": "/ywe9S1cOyIhR5yWzK7511NuQ2YX.jpg",
                    "genre_ids": [
                        28,
                        53,
                        878
                    ],
                    "id": 822119,
                    "original_language": "en",
                    "original_title": "Captain America: Brave New World",
                    "overview": "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
                    "popularity": 14.42,
                    "poster_path": "/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
                    "release_date": "2025-02-12",
                    "title": "Captain America: Brave New World",
                    "video": false,
                    "vote_average": 6.17,
                    "vote_count": 1018
                },
                {
                    "adult": false,
                    "backdrop_path": "/o4onk5Khih3vnZeHI2Rf2zyMWN6.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53
                    ],
                    "id": 1149167,
                    "original_language": "en",
                    "original_title": "High Rollers",
                    "overview": "Mason, a master thief, lives a dream life of riches with his crew and girlfriend Decker. When nemesis Salazar kidnaps Decker, Mason must attempt a high-stakes casino heist to save her, all while evading Salazar’s rivals and the FBI.",
                    "popularity": 24.013,
                    "poster_path": "/hHowAaChDjwueySmwVbsjHmpWa.jpg",
                    "release_date": "2025-03-14",
                    "title": "High Rollers",
                    "video": false,
                    "vote_average": 6.5,
                    "vote_count": 4
                },
                {
                    "adult": false,
                    "backdrop_path": "/4HnBkc45h6ABO9i6rbPHTqlKUu8.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 1013601,
                    "original_language": "en",
                    "original_title": "The Alto Knights",
                    "overview": "Two of New York's most notorious organized crime bosses, Frank Costello and Vito Genovese, vie for control of the city's streets. Once the best of friends, petty jealousies and a series of betrayals place them on a deadly collision course that will reshape the Mafia (and America) forever.",
                    "popularity": 23.418,
                    "poster_path": "/83XlB51zRozwqpwB4YfCc0AvpTA.jpg",
                    "release_date": "2025-03-14",
                    "title": "The Alto Knights",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/a4H5TFw7p7hCzED5zKuNzjBbi5h.jpg",
                    "genre_ids": [
                        18,
                        10402
                    ],
                    "id": 607141,
                    "original_language": "hi",
                    "original_title": "Be Happy",
                    "overview": "A dance-drama film that follows a single father and his witty, wise-beyond-her-years daughter. When his daughter's dream of performing in the country's biggest dance reality show collides with a life-altering crisis, the father is driven to do the unthinkable, showcasing the extraordinary lengths he will go to fulfill her wishes and find happiness.",
                    "popularity": 23.045,
                    "poster_path": "/ugMPpC7EkY5caAZU4pAl2CYdfP0.jpg",
                    "release_date": "2025-03-14",
                    "title": "Be Happy",
                    "video": false,
                    "vote_average": 7,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/mAuqcQLRqliNatDF9R4a3dz7sss.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 1171153,
                    "original_language": "de",
                    "original_title": "Köln 75",
                    "overview": "Behind one of the best-selling jazz records of all time, Keith Jarrett’s 1975 Köln Concert, how it almost didn’t happen, and how one formidable German teenager, Vera Brandes, breaks every boundary to set the conditions for the creation of a masterpiece. Vera, still in high school when she started producing and promoting music concerts in Cologne, puts everything on the line to put on this show. But Vera believes in the power of music, and she’s never seen anyone play like Keith Jarrett before.",
                    "popularity": 14.404,
                    "poster_path": "/6ZvdCexhNarRsZVDShialfsK5lf.jpg",
                    "release_date": "2025-03-13",
                    "title": "Köln 75",
                    "video": false,
                    "vote_average": 9.2,
                    "vote_count": 2
                },
                {
                    "adult": false,
                    "backdrop_path": "/eKUcoySFWU8BAWTYaLHcalg9KDR.jpg",
                    "genre_ids": [
                        18,
                        10749,
                        10402
                    ],
                    "id": 1182088,
                    "original_language": "pt",
                    "original_title": "O Melhor Amigo",
                    "overview": "Two great friends meet again after five years. Among so many things that have changed, the resumption of the bond awakens an old feeling for which they remain unprepared.",
                    "popularity": 13.741,
                    "poster_path": "/dRzRvvQZE9XfGSTDm2rgolG6e3j.jpg",
                    "release_date": "2025-03-13",
                    "title": "The Best Friend",
                    "video": false,
                    "vote_average": 7,
                    "vote_count": 2
                },
                {
                    "adult": false,
                    "backdrop_path": "/cKIH5oCwpAGqCdIrBDrohPJJkwb.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 1043808,
                    "original_language": "pt",
                    "original_title": "Vitória",
                    "overview": "Inspired by a real woman, who filmed for two years, hidden, the routine of drug dealers on Ladeira dos Tabajaras, in Copacabana, in 2004. At the time, the material was passed on to the police, who opened an investigation and carried out an operation that resulted in in the arrest of more than 30 people, including military police involved with the gang.",
                    "popularity": 13.688,
                    "poster_path": "/tiIwRMsmJnzXuCdPu38lCscgCS7.jpg",
                    "release_date": "2025-03-13",
                    "title": "Vitória",
                    "video": false,
                    "vote_average": 9,
                    "vote_count": 3
                },
                {
                    "adult": false,
                    "backdrop_path": "/dci3b1dC8PX3P5ZXnO7v6mjRcpC.jpg",
                    "genre_ids": [
                        99
                    ],
                    "id": 1119820,
                    "original_language": "he",
                    "original_title": "The Return from the Other Planet",
                    "overview": "In 1945, a few months after his release from Auschwitz, Yechiel De-Nur, still in his striped jacket, sat down and started writing. After two weeks, he was reborn as Ka-Tzetnik, “the man from the camps.” The books that he wrote were translated into 32 languages and sold millions, while the author himself hid behind the pseudonym Ka-Tzetnik. At the trial of Adolf Eichmann in 1961 his revelatory testimony revealed his true identity as he described Auschwitz as “the other planet,” a place outside of human judgment. Years later, undergoing an experimental LSD treatment for trauma, he revisits his experience, imagining himself as a SS officer, and that changes everything.",
                    "popularity": 13.68,
                    "poster_path": "/qaOhBUAJVpFl8zSCXX1qySsydcI.jpg",
                    "release_date": "2025-03-13",
                    "title": "The Return from the Other Planet",
                    "video": false,
                    "vote_average": 10,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/2r3b7XSYr9OfIaKyXmiaFNJc4oh.jpg",
                    "genre_ids": [
                        10749,
                        18
                    ],
                    "id": 1127648,
                    "original_language": "en",
                    "original_title": "Bonjour Tristesse",
                    "overview": "At the height of summer, 18-year-old Cécile (Lily McInerny) is relaxing by the French seaside with her father (Claes Bang) and falling in love with her new boyfriend. The arrival of her late mother’s enigmatic friend (Chloë Sevigny) turns her world upside down. A modern take on Françoise Sagan’s unforgettable coming-of-age novel. A Toronto International Film Festival premiere.",
                    "popularity": 13.667,
                    "poster_path": "/1yYSUbWs11mjl0s7bjRH8gywKQS.jpg",
                    "release_date": "2025-03-13",
                    "title": "Bonjour Tristesse",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/qkswMUEGRIiPIEf9hFnhPnUbXCN.jpg",
                    "genre_ids": [
                        53,
                        18
                    ],
                    "id": 1130863,
                    "original_language": "fr",
                    "original_title": "Belle",
                    "overview": "A couple have a peaceful existence in a small provincial town. He is a teacher and she runs an opticians practical. Their life is turned upside when Belle, a friend’s daughter who is lodging with them, is found dead in her room.  The husband becomes the prime suspect as the only one at home at the time.",
                    "popularity": 13.665,
                    "poster_path": "/5YITitG67kcHNUDJdP5XodlkTlm.jpg",
                    "release_date": "2025-03-13",
                    "title": "Belle",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        27,
                        9648,
                        53
                    ],
                    "id": 1306707,
                    "original_language": "en",
                    "original_title": "I Don't Like It Here",
                    "overview": "A recently paroled outsider returns to his desolate hometown, only to find a community plagued by a disturbing darkness. As he grapples with his own past and the town’s sinister secrets, he becomes the prime suspect in a series of gruesome murders.",
                    "popularity": 22.714,
                    "poster_path": "/bdwrJZ0Ue9I3M8OsTP3FuFSbpB.jpg",
                    "release_date": "2025-03-14",
                    "title": "I Don't Like It Here",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/zySLhWnLLVsIswnbF3q5IlOLVW7.jpg",
                    "genre_ids": [
                        18,
                        27,
                        9648
                    ],
                    "id": 1429788,
                    "original_language": "id",
                    "original_title": "Samar",
                    "overview": "After moving into her family's abandoned house, horror comic artist Ilmira struggles to complete her latest work while battling financial hardship. But when eerie figures from her past stories come to life—especially the haunting Hooded Woman—her reality spirals into a nightmare, forcing her to confront a buried childhood trauma.",
                    "popularity": 13.622,
                    "poster_path": "/waEYWR595cnmkr2OXFjasgGyZGt.jpg",
                    "release_date": "2025-03-13",
                    "title": "Nightmare",
                    "video": false,
                    "vote_average": 6.667,
                    "vote_count": 3
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        27,
                        18
                    ],
                    "id": 1317096,
                    "original_language": "th",
                    "original_title": "มูลู หน้าครู",
                    "overview": "May, a young architect who has just moved into her new house in the suburbs with her boyfriend Gun, got news of the death of her stepmother, Po. Only Noon, Po's daughter, testifies that someone killed her mother, however, there does not appear to be any clear evidence.  After May decided to take care Noon at her house, Noon has abnormal symptoms as if she had been possessed by a ghost. Whereas May herself, she began to have inability to sleep cause her illness. Gun then asked Chok, Sak and Master Khom to help.  Master Khom immediately realized that there were “black magic” from the past inside her house, he asked all to find the source of this evil. There is a misfortune in the past related to the The Master's Facial Skin which was removed by Master Jong who is another disciple from his same sect was the source of all these horrifying stories.",
                    "popularity": 13.619,
                    "poster_path": "/y1aTtWkMjgKgkNa6Zxs3kmxje21.jpg",
                    "release_date": "2025-03-13",
                    "title": "Mulu Nakru",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 1
                }
            ]
        },

        topRated: {
            title: "Top Rated",
            movie_data: [
                {
                    "adult": false,
                    "backdrop_path": "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 278,
                    "original_language": "en",
                    "original_title": "The Shawshank Redemption",
                    "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
                    "popularity": 5.522,
                    "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
                    "release_date": "1994-09-23",
                    "title": "The Shawshank Redemption",
                    "video": false,
                    "vote_average": 8.7,
                    "vote_count": 27885
                },
                {
                    "adult": false,
                    "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 238,
                    "original_language": "en",
                    "original_title": "The Godfather",
                    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
                    "popularity": 5.317,
                    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
                    "release_date": "1972-03-14",
                    "title": "The Godfather",
                    "video": false,
                    "vote_average": 8.689,
                    "vote_count": 21154
                },
                {
                    "adult": false,
                    "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 240,
                    "original_language": "en",
                    "original_title": "The Godfather Part II",
                    "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
                    "popularity": 4.747,
                    "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
                    "release_date": "1974-12-20",
                    "title": "The Godfather Part II",
                    "video": false,
                    "vote_average": 8.57,
                    "vote_count": 12772
                },
                {
                    "adult": false,
                    "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
                    "genre_ids": [
                        18,
                        36,
                        10752
                    ],
                    "id": 424,
                    "original_language": "en",
                    "original_title": "Schindler's List",
                    "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
                    "popularity": 4.457,
                    "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
                    "release_date": "1993-12-15",
                    "title": "Schindler's List",
                    "video": false,
                    "vote_average": 8.567,
                    "vote_count": 16221
                },
                {
                    "adult": false,
                    "backdrop_path": "/ixKQ55OL3S4Lm0wuKU0s09cVGpX.jpg",
                    "genre_ids": [
                        28,
                        12,
                        53
                    ],
                    "id": 1356039,
                    "original_language": "es",
                    "original_title": "Contraataque",
                    "overview": "When a hostage rescue mission creates a new enemy, Capt. Guerrero and his elite soldiers must face an ambush by a criminal group.",
                    "popularity": 9.43,
                    "poster_path": "/lI2uFlSEkwXKljqiry7coaJ6wIS.jpg",
                    "release_date": "2025-02-27",
                    "title": "Counterattack",
                    "video": false,
                    "vote_average": 8.531,
                    "vote_count": 433
                },
                {
                    "adult": false,
                    "backdrop_path": "/bxgTSUenZDHNFerQ1whRKplrMKF.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 389,
                    "original_language": "en",
                    "original_title": "12 Angry Men",
                    "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
                    "popularity": 4.281,
                    "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
                    "release_date": "1957-04-10",
                    "title": "12 Angry Men",
                    "video": false,
                    "vote_average": 8.549,
                    "vote_count": 8958
                },
                {
                    "adult": false,
                    "backdrop_path": "/6oaL4DP75yABrd5EbC4H2zq5ghc.jpg",
                    "genre_ids": [
                        16,
                        10751,
                        14
                    ],
                    "id": 129,
                    "original_language": "ja",
                    "original_title": "千と千尋の神隠し",
                    "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
                    "popularity": 4.573,
                    "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
                    "release_date": "2001-07-20",
                    "title": "Spirited Away",
                    "video": false,
                    "vote_average": 8.538,
                    "vote_count": 16909
                },
                {
                    "adult": false,
                    "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
                    "genre_ids": [
                        35,
                        18,
                        10749
                    ],
                    "id": 19404,
                    "original_language": "hi",
                    "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
                    "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
                    "popularity": 3.541,
                    "poster_path": "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
                    "release_date": "1995-10-20",
                    "title": "Dilwale Dulhania Le Jayenge",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 4467
                },
                {
                    "adult": false,
                    "backdrop_path": "/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg",
                    "genre_ids": [
                        18,
                        28,
                        80,
                        53
                    ],
                    "id": 155,
                    "original_language": "en",
                    "original_title": "The Dark Knight",
                    "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
                    "popularity": 5.572,
                    "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                    "release_date": "2008-07-16",
                    "title": "The Dark Knight",
                    "video": false,
                    "vote_average": 8.519,
                    "vote_count": 33543
                },
                {
                    "adult": false,
                    "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
                    "genre_ids": [
                        14,
                        18,
                        80
                    ],
                    "id": 497,
                    "original_language": "en",
                    "original_title": "The Green Mile",
                    "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
                    "popularity": 4.775,
                    "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
                    "release_date": "1999-12-10",
                    "title": "The Green Mile",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 17895
                },
                {
                    "adult": false,
                    "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
                    "genre_ids": [
                        35,
                        53,
                        18
                    ],
                    "id": 496243,
                    "original_language": "ko",
                    "original_title": "기생충",
                    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
                    "popularity": 5.007,
                    "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
                    "release_date": "2019-05-30",
                    "title": "Parasite",
                    "video": false,
                    "vote_average": 8.501,
                    "vote_count": 18790
                },
                {
                    "adult": false,
                    "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
                    "genre_ids": [
                        53,
                        80
                    ],
                    "id": 680,
                    "original_language": "en",
                    "original_title": "Pulp Fiction",
                    "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
                    "popularity": 5.676,
                    "poster_path": "/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
                    "release_date": "1994-09-10",
                    "title": "Pulp Fiction",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 28430
                },
                {
                    "adult": false,
                    "backdrop_path": "/8x9iKH8kWA0zdkgNdpAew7OstYe.jpg",
                    "genre_ids": [
                        16,
                        10749,
                        18
                    ],
                    "id": 372058,
                    "original_language": "ja",
                    "original_title": "君の名は。",
                    "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
                    "popularity": 4.661,
                    "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
                    "release_date": "2016-08-26",
                    "title": "Your Name.",
                    "video": false,
                    "vote_average": 8.485,
                    "vote_count": 11644
                },
                {
                    "adult": false,
                    "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
                    "genre_ids": [
                        12,
                        14,
                        28
                    ],
                    "id": 122,
                    "original_language": "en",
                    "original_title": "The Lord of the Rings: The Return of the King",
                    "overview": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
                    "popularity": 4.91,
                    "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
                    "release_date": "2003-12-17",
                    "title": "The Lord of the Rings: The Return of the King",
                    "video": false,
                    "vote_average": 8.5,
                    "vote_count": 24794
                },
                {
                    "adult": false,
                    "backdrop_path": "/mzfx54nfDPTUXZOG48u4LaEheDy.jpg",
                    "genre_ids": [
                        35,
                        18,
                        10749
                    ],
                    "id": 13,
                    "original_language": "en",
                    "original_title": "Forrest Gump",
                    "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
                    "popularity": 5.249,
                    "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
                    "release_date": "1994-06-23",
                    "title": "Forrest Gump",
                    "video": false,
                    "vote_average": 8.468,
                    "vote_count": 27955
                },
                {
                    "adult": false,
                    "backdrop_path": "/x4biAVdPVCghBlsVIzB6NmbghIz.jpg",
                    "genre_ids": [
                        37
                    ],
                    "id": 429,
                    "original_language": "it",
                    "original_title": "Il buono, il brutto, il cattivo",
                    "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
                    "popularity": 4.485,
                    "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
                    "release_date": "1966-12-22",
                    "title": "The Good, the Bad and the Ugly",
                    "video": false,
                    "vote_average": 8.463,
                    "vote_count": 8859
                },
                {
                    "adult": false,
                    "backdrop_path": "/sJNNMCc6B7KZIY3LH3JMYJJNH5j.jpg",
                    "genre_ids": [
                        28,
                        18
                    ],
                    "id": 346,
                    "original_language": "ja",
                    "original_title": "七人の侍",
                    "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
                    "popularity": 3.819,
                    "poster_path": "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
                    "release_date": "1954-04-26",
                    "title": "Seven Samurai",
                    "video": false,
                    "vote_average": 8.458,
                    "vote_count": 3823
                },
                {
                    "adult": false,
                    "backdrop_path": "/7TF4p86ZafnxFuNqWdhpHXFO244.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 769,
                    "original_language": "en",
                    "original_title": "GoodFellas",
                    "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
                    "popularity": 5.621,
                    "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
                    "release_date": "1990-09-12",
                    "title": "GoodFellas",
                    "video": false,
                    "vote_average": 8.457,
                    "vote_count": 13180
                },
                {
                    "adult": false,
                    "backdrop_path": "/8sNiAPPYU14PUepFNeSNGUTiHW.jpg",
                    "genre_ids": [
                        12,
                        18,
                        878
                    ],
                    "id": 157336,
                    "original_language": "en",
                    "original_title": "Interstellar",
                    "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
                    "popularity": 5.868,
                    "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                    "release_date": "2014-11-05",
                    "title": "Interstellar",
                    "video": false,
                    "vote_average": 8.453,
                    "vote_count": 36709
                },
                {
                    "adult": false,
                    "backdrop_path": "/tDFvXn4tane9lUvFAFAUkMylwSr.jpg",
                    "genre_ids": [
                        16,
                        18,
                        10752
                    ],
                    "id": 12477,
                    "original_language": "ja",
                    "original_title": "火垂るの墓",
                    "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
                    "popularity": 0.004,
                    "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
                    "release_date": "1988-04-16",
                    "title": "Grave of the Fireflies",
                    "video": false,
                    "vote_average": 8.45,
                    "vote_count": 5777
                }
            ]
        },

        nowPlaying: {
            title: "Top Rated",
            movie_data: [
                {
                    "adult": false,
                    "backdrop_path": "/gFFqWsjLjRfipKzlzaYPD097FNC.jpg",
                    "genre_ids": [
                        28,
                        53,
                        80
                    ],
                    "id": 1126166,
                    "original_language": "en",
                    "original_title": "Flight Risk",
                    "overview": "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
                    "popularity": 25.919,
                    "poster_path": "/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
                    "release_date": "2025-01-22",
                    "title": "Flight Risk",
                    "video": false,
                    "vote_average": 6.1,
                    "vote_count": 469
                },
                {
                    "adult": false,
                    "backdrop_path": "/87GU2ifjNYtgYtcRH1NNH1P4ODo.jpg",
                    "genre_ids": [
                        18,
                        35,
                        10749
                    ],
                    "id": 1064213,
                    "original_language": "en",
                    "original_title": "Anora",
                    "overview": "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
                    "popularity": 20.921,
                    "poster_path": "/qh8m8Udz0sCa5gy9VaqfHPh0yPM.jpg",
                    "release_date": "2024-10-14",
                    "title": "Anora",
                    "video": false,
                    "vote_average": 7.068,
                    "vote_count": 1706
                },
                {
                    "adult": false,
                    "backdrop_path": "/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg",
                    "genre_ids": [
                        10749,
                        878,
                        53
                    ],
                    "id": 950396,
                    "original_language": "en",
                    "original_title": "The Gorge",
                    "overview": "Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.",
                    "popularity": 27.269,
                    "poster_path": "/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
                    "release_date": "2025-02-13",
                    "title": "The Gorge",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 1911
                },
                {
                    "adult": false,
                    "backdrop_path": "/gKqeUlwYiZBDbFU5gT0ev7W3Vzs.jpg",
                    "genre_ids": [
                        53,
                        35,
                        27
                    ],
                    "id": 1013482,
                    "original_language": "en",
                    "original_title": "Borderline",
                    "overview": "A helplessly romantic sociopath escapes from a mental institution and invades the home of a '90s pop superstar. He just wants to be loved; she just wants to survive.",
                    "popularity": 25.005,
                    "poster_path": "/z2yAWt1aAvhxap9mdjlQhXiEJT4.jpg",
                    "release_date": "2025-03-14",
                    "title": "Borderline",
                    "video": false,
                    "vote_average": 5,
                    "vote_count": 6
                },
                {
                    "adult": false,
                    "backdrop_path": "/6J259Zuq09Bt2PLUNeTS5a3DwLZ.jpg",
                    "genre_ids": [
                        28,
                        53
                    ],
                    "id": 1212855,
                    "original_language": "en",
                    "original_title": "Fight or Flight",
                    "overview": "A mercenary takes on the job of tracking down a target on a plane but must protect her when they're surrounded by people trying to kill both of them.",
                    "popularity": 15.053,
                    "poster_path": "/x4nWnfgJvL045rcUCSJzfgIIY9i.jpg",
                    "release_date": "2025-03-13",
                    "title": "Fight or Flight",
                    "video": false,
                    "vote_average": 6.4,
                    "vote_count": 18
                },
                {
                    "adult": false,
                    "backdrop_path": "/ywe9S1cOyIhR5yWzK7511NuQ2YX.jpg",
                    "genre_ids": [
                        28,
                        53,
                        878
                    ],
                    "id": 822119,
                    "original_language": "en",
                    "original_title": "Captain America: Brave New World",
                    "overview": "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
                    "popularity": 14.42,
                    "poster_path": "/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
                    "release_date": "2025-02-12",
                    "title": "Captain America: Brave New World",
                    "video": false,
                    "vote_average": 6.175,
                    "vote_count": 1017
                },
                {
                    "adult": false,
                    "backdrop_path": "/o4onk5Khih3vnZeHI2Rf2zyMWN6.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53
                    ],
                    "id": 1149167,
                    "original_language": "en",
                    "original_title": "High Rollers",
                    "overview": "Mason, a master thief, lives a dream life of riches with his crew and girlfriend Decker. When nemesis Salazar kidnaps Decker, Mason must attempt a high-stakes casino heist to save her, all while evading Salazar’s rivals and the FBI.",
                    "popularity": 24.013,
                    "poster_path": "/hHowAaChDjwueySmwVbsjHmpWa.jpg",
                    "release_date": "2025-03-14",
                    "title": "High Rollers",
                    "video": false,
                    "vote_average": 5.3,
                    "vote_count": 3
                },
                {
                    "adult": false,
                    "backdrop_path": "/4HnBkc45h6ABO9i6rbPHTqlKUu8.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 1013601,
                    "original_language": "en",
                    "original_title": "The Alto Knights",
                    "overview": "Two of New York's most notorious organized crime bosses, Frank Costello and Vito Genovese, vie for control of the city's streets. Once the best of friends, petty jealousies and a series of betrayals place them on a deadly collision course that will reshape the Mafia (and America) forever.",
                    "popularity": 23.418,
                    "poster_path": "/83XlB51zRozwqpwB4YfCc0AvpTA.jpg",
                    "release_date": "2025-03-14",
                    "title": "The Alto Knights",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/a4H5TFw7p7hCzED5zKuNzjBbi5h.jpg",
                    "genre_ids": [
                        18,
                        10402
                    ],
                    "id": 607141,
                    "original_language": "hi",
                    "original_title": "Be Happy",
                    "overview": "A dance-drama film that follows a single father and his witty, wise-beyond-her-years daughter. When his daughter's dream of performing in the country's biggest dance reality show collides with a life-altering crisis, the father is driven to do the unthinkable, showcasing the extraordinary lengths he will go to fulfill her wishes and find happiness.",
                    "popularity": 23.045,
                    "poster_path": "/ugMPpC7EkY5caAZU4pAl2CYdfP0.jpg",
                    "release_date": "2025-03-14",
                    "title": "Be Happy",
                    "video": false,
                    "vote_average": 7,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/mAuqcQLRqliNatDF9R4a3dz7sss.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 1171153,
                    "original_language": "de",
                    "original_title": "Köln 75",
                    "overview": "Behind one of the best-selling jazz records of all time, Keith Jarrett’s 1975 Köln Concert, how it almost didn’t happen, and how one formidable German teenager, Vera Brandes, breaks every boundary to set the conditions for the creation of a masterpiece. Vera, still in high school when she started producing and promoting music concerts in Cologne, puts everything on the line to put on this show. But Vera believes in the power of music, and she’s never seen anyone play like Keith Jarrett before.",
                    "popularity": 14.404,
                    "poster_path": "/6ZvdCexhNarRsZVDShialfsK5lf.jpg",
                    "release_date": "2025-03-13",
                    "title": "Köln 75",
                    "video": false,
                    "vote_average": 9.2,
                    "vote_count": 2
                },
                {
                    "adult": false,
                    "backdrop_path": "/eKUcoySFWU8BAWTYaLHcalg9KDR.jpg",
                    "genre_ids": [
                        18,
                        10749,
                        10402
                    ],
                    "id": 1182088,
                    "original_language": "pt",
                    "original_title": "O Melhor Amigo",
                    "overview": "Two great friends meet again after five years. Among so many things that have changed, the resumption of the bond awakens an old feeling for which they remain unprepared.",
                    "popularity": 13.741,
                    "poster_path": "/dRzRvvQZE9XfGSTDm2rgolG6e3j.jpg",
                    "release_date": "2025-03-13",
                    "title": "The Best Friend",
                    "video": false,
                    "vote_average": 7,
                    "vote_count": 2
                },
                {
                    "adult": false,
                    "backdrop_path": "/cKIH5oCwpAGqCdIrBDrohPJJkwb.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 1043808,
                    "original_language": "pt",
                    "original_title": "Vitória",
                    "overview": "Inspired by a real woman, who filmed for two years, hidden, the routine of drug dealers on Ladeira dos Tabajaras, in Copacabana, in 2004. At the time, the material was passed on to the police, who opened an investigation and carried out an operation that resulted in in the arrest of more than 30 people, including military police involved with the gang.",
                    "popularity": 13.688,
                    "poster_path": "/tiIwRMsmJnzXuCdPu38lCscgCS7.jpg",
                    "release_date": "2025-03-13",
                    "title": "Vitória",
                    "video": false,
                    "vote_average": 9,
                    "vote_count": 3
                },
                {
                    "adult": false,
                    "backdrop_path": "/dci3b1dC8PX3P5ZXnO7v6mjRcpC.jpg",
                    "genre_ids": [
                        99
                    ],
                    "id": 1119820,
                    "original_language": "he",
                    "original_title": "The Return from the Other Planet",
                    "overview": "In 1945, a few months after his release from Auschwitz, Yechiel De-Nur, still in his striped jacket, sat down and started writing. After two weeks, he was reborn as Ka-Tzetnik, “the man from the camps.” The books that he wrote were translated into 32 languages and sold millions, while the author himself hid behind the pseudonym Ka-Tzetnik. At the trial of Adolf Eichmann in 1961 his revelatory testimony revealed his true identity as he described Auschwitz as “the other planet,” a place outside of human judgment. Years later, undergoing an experimental LSD treatment for trauma, he revisits his experience, imagining himself as a SS officer, and that changes everything.",
                    "popularity": 13.68,
                    "poster_path": "/qaOhBUAJVpFl8zSCXX1qySsydcI.jpg",
                    "release_date": "2025-03-13",
                    "title": "The Return from the Other Planet",
                    "video": false,
                    "vote_average": 10,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/2r3b7XSYr9OfIaKyXmiaFNJc4oh.jpg",
                    "genre_ids": [
                        10749,
                        18
                    ],
                    "id": 1127648,
                    "original_language": "en",
                    "original_title": "Bonjour Tristesse",
                    "overview": "At the height of summer, 18-year-old Cécile (Lily McInerny) is relaxing by the French seaside with her father (Claes Bang) and falling in love with her new boyfriend. The arrival of her late mother’s enigmatic friend (Chloë Sevigny) turns her world upside down. A modern take on Françoise Sagan’s unforgettable coming-of-age novel. A Toronto International Film Festival premiere.",
                    "popularity": 13.667,
                    "poster_path": "/1yYSUbWs11mjl0s7bjRH8gywKQS.jpg",
                    "release_date": "2025-03-13",
                    "title": "Bonjour Tristesse",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/qkswMUEGRIiPIEf9hFnhPnUbXCN.jpg",
                    "genre_ids": [
                        53,
                        18
                    ],
                    "id": 1130863,
                    "original_language": "fr",
                    "original_title": "Belle",
                    "overview": "A couple have a peaceful existence in a small provincial town. He is a teacher and she runs an opticians practical. Their life is turned upside when Belle, a friend’s daughter who is lodging with them, is found dead in her room.  The husband becomes the prime suspect as the only one at home at the time.",
                    "popularity": 13.665,
                    "poster_path": "/5YITitG67kcHNUDJdP5XodlkTlm.jpg",
                    "release_date": "2025-03-13",
                    "title": "Belle",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        27,
                        9648,
                        53
                    ],
                    "id": 1306707,
                    "original_language": "en",
                    "original_title": "I Don't Like It Here",
                    "overview": "A recently paroled outsider returns to his desolate hometown, only to find a community plagued by a disturbing darkness. As he grapples with his own past and the town’s sinister secrets, he becomes the prime suspect in a series of gruesome murders.",
                    "popularity": 22.714,
                    "poster_path": "/bdwrJZ0Ue9I3M8OsTP3FuFSbpB.jpg",
                    "release_date": "2025-03-14",
                    "title": "I Don't Like It Here",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/zySLhWnLLVsIswnbF3q5IlOLVW7.jpg",
                    "genre_ids": [
                        18,
                        27,
                        9648
                    ],
                    "id": 1429788,
                    "original_language": "id",
                    "original_title": "Samar",
                    "overview": "After moving into her family's abandoned house, horror comic artist Ilmira struggles to complete her latest work while battling financial hardship. But when eerie figures from her past stories come to life—especially the haunting Hooded Woman—her reality spirals into a nightmare, forcing her to confront a buried childhood trauma.",
                    "popularity": 13.622,
                    "poster_path": "/waEYWR595cnmkr2OXFjasgGyZGt.jpg",
                    "release_date": "2025-03-13",
                    "title": "Nightmare",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 2
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        27,
                        18
                    ],
                    "id": 1317096,
                    "original_language": "th",
                    "original_title": "มูลู หน้าครู",
                    "overview": "May, a young architect who has just moved into her new house in the suburbs with her boyfriend Gun, got news of the death of her stepmother, Po. Only Noon, Po's daughter, testifies that someone killed her mother, however, there does not appear to be any clear evidence.  After May decided to take care Noon at her house, Noon has abnormal symptoms as if she had been possessed by a ghost. Whereas May herself, she began to have inability to sleep cause her illness. Gun then asked Chok, Sak and Master Khom to help.  Master Khom immediately realized that there were “black magic” from the past inside her house, he asked all to find the source of this evil. There is a misfortune in the past related to the The Master's Facial Skin which was removed by Master Jong who is another disciple from his same sect was the source of all these horrifying stories.",
                    "popularity": 13.619,
                    "poster_path": "/y1aTtWkMjgKgkNa6Zxs3kmxje21.jpg",
                    "release_date": "2025-03-13",
                    "title": "Mulu Nakru",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/eJFCdeVz6EBC5WkpkbCwhRJ4iKj.jpg",
                    "genre_ids": [
                        9648
                    ],
                    "id": 1428262,
                    "original_language": "en",
                    "original_title": "Mystery Island: Winner Takes All",
                    "overview": "Mystery Island hosts contest winners vying to solve a fake murder for a grand prize, but the event goes awry when an employee is murdered, and secrets are uncovered.",
                    "popularity": 13.606,
                    "poster_path": "/gYdmNz3HT22vimRdwVCmhKBSLZV.jpg",
                    "release_date": "2025-03-13",
                    "title": "Mystery Island: Winner Takes All",
                    "video": false,
                    "vote_average": 4,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/6bro7hHYoghblrjAs8NQfvWwLNB.jpg",
                    "genre_ids": [
                        18,
                        10749
                    ],
                    "id": 1353002,
                    "original_language": "es",
                    "original_title": "Lo que escribimos juntos",
                    "overview": "Mariano and Juan have been dating for several years; they have a dog and a quiet life. Mariano always wanted to have a small plant nursery away from the city and now that Juan’s work as a writer is more established due to the success of his latest novel, they decide to make that change. While they adjust to their new space and their new routines, they receive a visit from Juan's best friend, who has news to tell them.",
                    "popularity": 13.575,
                    "poster_path": "/vIZuwXUvgUPfZFYYduXyJkQ71Ld.jpg",
                    "release_date": "2025-03-13",
                    "title": "What We Wrote Together",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 1
                }
            ]
        },

        upcoming: {
            title: "Top Rated",
            movie_data: [
                {
                    "adult": false,
                    "backdrop_path": "/gFFqWsjLjRfipKzlzaYPD097FNC.jpg",
                    "genre_ids": [
                        28,
                        53,
                        80
                    ],
                    "id": 1126166,
                    "original_language": "en",
                    "original_title": "Flight Risk",
                    "overview": "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
                    "popularity": 25.919,
                    "poster_path": "/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
                    "release_date": "2025-01-22",
                    "title": "Flight Risk",
                    "video": false,
                    "vote_average": 6.1,
                    "vote_count": 469
                },
                {
                    "adult": false,
                    "backdrop_path": "/4HnBkc45h6ABO9i6rbPHTqlKUu8.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 1013601,
                    "original_language": "en",
                    "original_title": "The Alto Knights",
                    "overview": "Two of New York's most notorious organized crime bosses, Frank Costello and Vito Genovese, vie for control of the city's streets. Once the best of friends, petty jealousies and a series of betrayals place them on a deadly collision course that will reshape the Mafia (and America) forever.",
                    "popularity": 23.418,
                    "poster_path": "/83XlB51zRozwqpwB4YfCc0AvpTA.jpg",
                    "release_date": "2025-03-14",
                    "title": "The Alto Knights",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/zySLhWnLLVsIswnbF3q5IlOLVW7.jpg",
                    "genre_ids": [
                        18,
                        27,
                        9648
                    ],
                    "id": 1429788,
                    "original_language": "id",
                    "original_title": "Samar",
                    "overview": "After moving into her family's abandoned house, horror comic artist Ilmira struggles to complete her latest work while battling financial hardship. But when eerie figures from her past stories come to life—especially the haunting Hooded Woman—her reality spirals into a nightmare, forcing her to confront a buried childhood trauma.",
                    "popularity": 13.622,
                    "poster_path": "/waEYWR595cnmkr2OXFjasgGyZGt.jpg",
                    "release_date": "2025-03-13",
                    "title": "Nightmare",
                    "video": false,
                    "vote_average": 6.667,
                    "vote_count": 3
                },
                {
                    "adult": false,
                    "backdrop_path": "/hNA73rnG4PjSwgojaC2gbO1f8Rt.jpg",
                    "genre_ids": [
                        878,
                        35,
                        12
                    ],
                    "id": 696506,
                    "original_language": "en",
                    "original_title": "Mickey 17",
                    "overview": "Unlikely hero Mickey Barnes finds himself in the extraordinary circumstance of working for an employer who demands the ultimate commitment to the job… to die, for a living.",
                    "popularity": 17.87,
                    "poster_path": "/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
                    "release_date": "2025-02-28",
                    "title": "Mickey 17",
                    "video": false,
                    "vote_average": 7,
                    "vote_count": 538
                },
                {
                    "adult": false,
                    "backdrop_path": "/sc1abgWNXc29wSBaerrjGBih06l.jpg",
                    "genre_ids": [
                        27,
                        878,
                        53
                    ],
                    "id": 1084199,
                    "original_language": "en",
                    "original_title": "Companion",
                    "overview": "During a weekend getaway at a secluded lakeside estate, a group of friends finds themselves entangled in a web of secrets, deception, and advanced technology. As tensions rise and loyalties are tested, they uncover unsettling truths about themselves and the world around them.",
                    "popularity": 9.956,
                    "poster_path": "/oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg",
                    "release_date": "2025-01-22",
                    "title": "Companion",
                    "video": false,
                    "vote_average": 7.05,
                    "vote_count": 758
                },
                {
                    "adult": false,
                    "backdrop_path": "/5zz7MfcUhYpxT6AaNyUF7jwOmKh.jpg",
                    "genre_ids": [
                        53,
                        9648,
                        27
                    ],
                    "id": 1202479,
                    "original_language": "en",
                    "original_title": "Opus",
                    "overview": "A young writer is invited to the remote compound of a legendary pop star who mysteriously disappeared thirty years ago. Surrounded by the star's cult of sycophants and intoxicated journalists, she finds herself in the middle of his twisted plan.",
                    "popularity": 14.289,
                    "poster_path": "/m0du9dsiOVeb0SgfqR8ZAEPRxww.jpg",
                    "release_date": "2025-03-13",
                    "title": "Opus",
                    "video": false,
                    "vote_average": 6.5,
                    "vote_count": 7
                },
                {
                    "adult": false,
                    "backdrop_path": "/gxO51FVgADhYGGnnRPIlutVqb30.jpg",
                    "genre_ids": [
                        53
                    ],
                    "id": 1233575,
                    "original_language": "en",
                    "original_title": "Black Bag",
                    "overview": "When his beloved wife is suspected of betraying the nation, an intelligence agent faces the ultimate test – loyalty to his marriage or his country.",
                    "popularity": 13.647,
                    "poster_path": "/vcYrQ94y8L2qxEfQgTLVbtmppcn.jpg",
                    "release_date": "2025-03-12",
                    "title": "Black Bag",
                    "video": false,
                    "vote_average": 6.8,
                    "vote_count": 26
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        10402,
                        99
                    ],
                    "id": 1433071,
                    "original_language": "ko",
                    "original_title": "제로베이스원 더 퍼스트 투어 [타임리스 월드] 인 시네마",
                    "overview": "Achieving significant milestones in their first year of debut and captivating 140,000 fans across 8 cities on their first world tour, ZEROBASEONE’s journey with ZEROSE takes center stage on the big screen in SCREENX, 4DX, and ULTRA 4DX where available. From iconic songs such as \"In Bloom\", \"Feel the POP\", and \"GOOD SO BAD\" to “Say My Name” and “Here I Am” from the show Boys Planet, behind-the-scenes footage that can only be found in the movie, to intimate interviews brimming with heartfelt feelings for ZEROSE, ZEROBASEONE’s groundbreaking performance is coming to the big screen.",
                    "popularity": 8.644,
                    "poster_path": "/lYGhnePDLr0Tl6uje2tjEhDwqXD.jpg",
                    "release_date": "2025-03-12",
                    "title": "ZEROBASEONE THE FIRST TOUR [TIMELESS WORLD] IN CINEMAS",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/b3mdmjYTEL70j7nuXATUAD9qgu4.jpg",
                    "genre_ids": [
                        16,
                        14,
                        12
                    ],
                    "id": 823219,
                    "original_language": "lv",
                    "original_title": "Straume",
                    "overview": "A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.",
                    "popularity": 13.517,
                    "poster_path": "/imKSymKBK7o73sajciEmndJoVkR.jpg",
                    "release_date": "2024-08-29",
                    "title": "Flow",
                    "video": false,
                    "vote_average": 8.28,
                    "vote_count": 1524
                },
                {
                    "adult": false,
                    "backdrop_path": "/iXU87IdtNsYt7n6OigPJBDdbFf1.jpg",
                    "genre_ids": [
                        10751,
                        16,
                        35,
                        28
                    ],
                    "id": 774370,
                    "original_language": "en",
                    "original_title": "Dog Man",
                    "overview": "When a faithful police dog and his human police officer owner are injured together on the job, a harebrained but life-saving surgery fuses the two of them together and Dog Man is born. Dog Man is sworn to protect and serve—and fetch, sit and roll over. As Dog Man embraces his new identity and strives to impress his Chief, he must stop the pretty evil plots of feline supervillain Petey the Cat.",
                    "popularity": 6.652,
                    "poster_path": "/89wNiexZdvLQ41OQWIsQy4O6jAQ.jpg",
                    "release_date": "2025-01-24",
                    "title": "Dog Man",
                    "video": false,
                    "vote_average": 7.722,
                    "vote_count": 162
                },
                {
                    "adult": false,
                    "backdrop_path": "/st9M4O4imOuQVU35RMeYuEQfkvD.jpg",
                    "genre_ids": [
                        27,
                        18
                    ],
                    "id": 1140535,
                    "original_language": "en",
                    "original_title": "Presence",
                    "overview": "A couple, Rebekah and Chris, and their children, Tyler and Chloe, move into a seemingly normal suburban home. When strange occurrences occur, they begin to believe that there is something else in the house with them. The presence is about to disrupt their lives in unimaginable ways.",
                    "popularity": 6.287,
                    "poster_path": "/6tucXqfBMEVSuFZuVtTMLIOLZOe.jpg",
                    "release_date": "2025-01-16",
                    "title": "Presence",
                    "video": false,
                    "vote_average": 6.1,
                    "vote_count": 192
                },
                {
                    "adult": false,
                    "backdrop_path": "/lyBH2mFFU6qrHwD5QKotL2JnEb6.jpg",
                    "genre_ids": [
                        28,
                        35,
                        53
                    ],
                    "id": 1195506,
                    "original_language": "en",
                    "original_title": "Novocaine",
                    "overview": "When the girl of his dreams is kidnapped, everyman Nate turns his inability to feel pain into an unexpected strength in his fight to get her back.",
                    "popularity": 9.753,
                    "poster_path": "/xEXDIJFenYgRwpsJs1mx6hr1DKy.jpg",
                    "release_date": "2025-03-12",
                    "title": "Novocaine",
                    "video": false,
                    "vote_average": 7.9,
                    "vote_count": 10
                },
                {
                    "adult": false,
                    "backdrop_path": "/hmZnqijPaaACjenDkrbWcCmcADI.jpg",
                    "genre_ids": [
                        18
                    ],
                    "id": 549509,
                    "original_language": "en",
                    "original_title": "The Brutalist",
                    "overview": "Escaping post-war Europe, visionary architect László Toth arrives in America to rebuild his life. On his own in a strange new country, a wealthy industrialist recognizes his talent. But power and legacy come at a heavy cost...",
                    "popularity": 6.918,
                    "poster_path": "/vP7Yd6couiAaw9jgMd5cjMRj3hQ.jpg",
                    "release_date": "2024-12-20",
                    "title": "The Brutalist",
                    "video": false,
                    "vote_average": 7.065,
                    "vote_count": 808
                },
                {
                    "adult": false,
                    "backdrop_path": "/qSOMdbZ6AOdHR999HWwVAh6ALFI.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53
                    ],
                    "id": 1249289,
                    "original_language": "en",
                    "original_title": "Alarum",
                    "overview": "Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset. Joe and Lara are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as Alarum.",
                    "popularity": 5.707,
                    "poster_path": "/v313aUGmMNj6yNveaiQXysBmjVS.jpg",
                    "release_date": "2025-01-16",
                    "title": "Alarum",
                    "video": false,
                    "vote_average": 5.8,
                    "vote_count": 225
                },
                {
                    "adult": false,
                    "backdrop_path": "/tkRDTu9hyWgaBSSzfkYDCZYd1kV.jpg",
                    "genre_ids": [
                        18,
                        53,
                        9648
                    ],
                    "id": 974576,
                    "original_language": "en",
                    "original_title": "Conclave",
                    "overview": "After the unexpected death of the Pope, Cardinal Lawrence is tasked with managing the covert and ancient ritual of electing a new one. Sequestered in the Vatican with the Catholic Church’s most powerful leaders until the process is complete, Lawrence finds himself at the center of a conspiracy that could lead to its downfall.",
                    "popularity": 7.79,
                    "poster_path": "/m5x8D0bZ3eKqIVWZ5y7TnZ2oTVg.jpg",
                    "release_date": "2024-10-25",
                    "title": "Conclave",
                    "video": false,
                    "vote_average": 7.168,
                    "vote_count": 1619
                },
                {
                    "adult": false,
                    "backdrop_path": "/sBtuuQ2MPliv76mjckkfwB3mNNO.jpg",
                    "genre_ids": [
                        99
                    ],
                    "id": 1417181,
                    "original_language": "en",
                    "original_title": "Dawn of Impressionism: Paris 1874",
                    "overview": "The Impressionists are the most popular group in art history – millions flock every year to marvel at their masterpieces. But, to begin with, they were scorned, penniless outsiders. 1874 was the year that changed everything; the first Impressionists, “hungry for independence”, broke the mould by holding their own exhibition outside official channels. Impressionism was born and the art world was changed forever.  What led to that first groundbreaking show 150 years ago? Who were the maverick personalities that wielded their brushes in such a radical and provocative way? The spectacular Musée d’Orsay exhibition brings fresh eyes to this extraordinary tale of passion and rebellion. The story is told not by historians and curators but in the words of those who witnessed the dawn of Impressionism: the artists, press and people of Paris, 1874.",
                    "popularity": 7.705,
                    "poster_path": "/lSU85MrxOtlrvtiRlI9GTPBGiwK.jpg",
                    "release_date": "2025-03-18",
                    "title": "Dawn of Impressionism: Paris 1874",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/hAQnXxOwCjgYcKRgTdYPRC8neqL.jpg",
                    "genre_ids": [
                        28,
                        18
                    ],
                    "id": 811941,
                    "original_language": "te",
                    "original_title": "దేవర: Part 1",
                    "overview": "Devara, a fearless man from a coastal region, embarks on a perilous journey into the treacherous world of the sea to safeguard the lives of his people. Unbeknownst to him, his brother Bhaira is plotting a conspiracy against him. As events unfold, Devara passes on his legacy to his mild-mannered and timid son, Varada.",
                    "popularity": 4.132,
                    "poster_path": "/A9ENz6d4lC3UYOX8Z1gJwDEo1sM.jpg",
                    "release_date": "2024-09-26",
                    "title": "Devara : Part 1",
                    "video": false,
                    "vote_average": 7.031,
                    "vote_count": 175
                },
                {
                    "adult": false,
                    "backdrop_path": "/2siOHQYDG7gCQB6g69g2pTZiSia.jpg",
                    "genre_ids": [
                        10751,
                        14
                    ],
                    "id": 447273,
                    "original_language": "en",
                    "original_title": "Snow White",
                    "overview": "A beautiful girl, Snow White, takes refuge in the forest in the house of seven dwarfs to hide from her stepmother, the wicked Queen. The Queen is jealous because she wants to be known as 'the fairest in the land', and Snow White's beauty surpasses her own.",
                    "popularity": 6.765,
                    "poster_path": "/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
                    "release_date": "2025-03-19",
                    "title": "Snow White",
                    "video": false,
                    "vote_average": 2.5,
                    "vote_count": 6
                },
                {
                    "adult": false,
                    "backdrop_path": "/x0pkoGlwWdkzRxgQioD3cUG0awu.jpg",
                    "genre_ids": [
                        18,
                        36
                    ],
                    "id": 1000837,
                    "original_language": "pt",
                    "original_title": "Ainda Estou Aqui",
                    "overview": "In 1971, military dictatorship in Brazil reaches its height. The Paiva family — Rubens, Eunice, and their five children — live in a beachside house in Rio, open to all their friends. One day, Rubens is taken for questioning and does not return.",
                    "popularity": 6.825,
                    "poster_path": "/gZnsMbhCvhzAQlKaVpeFRHYjGyb.jpg",
                    "release_date": "2024-09-19",
                    "title": "I'm Still Here",
                    "video": false,
                    "vote_average": 8,
                    "vote_count": 466
                },
                {
                    "adult": false,
                    "backdrop_path": "/3QeuagbU1YARTkGrPS4dvYSQGZi.jpg",
                    "genre_ids": [
                        10402,
                        18
                    ],
                    "id": 799766,
                    "original_language": "en",
                    "original_title": "Better Man",
                    "overview": "Follow Robbie Williams' journey from childhood, to being the youngest member of chart-topping boyband Take That, through to his unparalleled achievements as a record-breaking solo artist – all the while confronting the challenges that stratospheric fame and success can bring.",
                    "popularity": 6.391,
                    "poster_path": "/fbGCmMp0HlYnAPv28GOENPShezM.jpg",
                    "release_date": "2024-12-06",
                    "title": "Better Man",
                    "video": false,
                    "vote_average": 7.7,
                    "vote_count": 308
                }
            ]
        },

        actionMovies: {
            title: "Top Rated",
            movie_data: [
                {
                    "adult": false,
                    "backdrop_path": "/gFFqWsjLjRfipKzlzaYPD097FNC.jpg",
                    "genre_ids": [
                        28,
                        53,
                        80
                    ],
                    "id": 1126166,
                    "original_language": "en",
                    "original_title": "Flight Risk",
                    "overview": "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
                    "popularity": 25.919,
                    "poster_path": "/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
                    "release_date": "2025-01-22",
                    "title": "Flight Risk",
                    "video": false,
                    "vote_average": 6.1,
                    "vote_count": 469
                },
                {
                    "adult": false,
                    "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
                    "genre_ids": [
                        28,
                        878,
                        35,
                        10751,
                        12,
                        14
                    ],
                    "id": 939243,
                    "original_language": "en",
                    "original_title": "Sonic the Hedgehog 3",
                    "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
                    "popularity": 17.029,
                    "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
                    "release_date": "2024-12-19",
                    "title": "Sonic the Hedgehog 3",
                    "video": false,
                    "vote_average": 7.707,
                    "vote_count": 2156
                },
                {
                    "adult": false,
                    "backdrop_path": "/6J259Zuq09Bt2PLUNeTS5a3DwLZ.jpg",
                    "genre_ids": [
                        28,
                        53
                    ],
                    "id": 1212855,
                    "original_language": "en",
                    "original_title": "Fight or Flight",
                    "overview": "A mercenary takes on the job of tracking down a target on a plane but must protect her when they're surrounded by people trying to kill both of them.",
                    "popularity": 15.053,
                    "poster_path": "/x4nWnfgJvL045rcUCSJzfgIIY9i.jpg",
                    "release_date": "2025-03-13",
                    "title": "Fight or Flight",
                    "video": false,
                    "vote_average": 6.4,
                    "vote_count": 18
                },
                {
                    "adult": false,
                    "backdrop_path": "/ywe9S1cOyIhR5yWzK7511NuQ2YX.jpg",
                    "genre_ids": [
                        28,
                        53,
                        878
                    ],
                    "id": 822119,
                    "original_language": "en",
                    "original_title": "Captain America: Brave New World",
                    "overview": "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
                    "popularity": 14.42,
                    "poster_path": "/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
                    "release_date": "2025-02-12",
                    "title": "Captain America: Brave New World",
                    "video": false,
                    "vote_average": 6.175,
                    "vote_count": 1017
                },
                {
                    "adult": false,
                    "backdrop_path": "/o4onk5Khih3vnZeHI2Rf2zyMWN6.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53
                    ],
                    "id": 1149167,
                    "original_language": "en",
                    "original_title": "High Rollers",
                    "overview": "Mason, a master thief, lives a dream life of riches with his crew and girlfriend Decker. When nemesis Salazar kidnaps Decker, Mason must attempt a high-stakes casino heist to save her, all while evading Salazar’s rivals and the FBI.",
                    "popularity": 24.013,
                    "poster_path": "/hHowAaChDjwueySmwVbsjHmpWa.jpg",
                    "release_date": "2025-03-14",
                    "title": "High Rollers",
                    "video": false,
                    "vote_average": 5.3,
                    "vote_count": 3
                },
                {
                    "adult": false,
                    "backdrop_path": "/7cNE2qydew1c8fqnlhWjkE3DHc2.jpg",
                    "genre_ids": [
                        28,
                        18,
                        12,
                        10752
                    ],
                    "id": 927342,
                    "original_language": "ta",
                    "original_title": "அமரன்",
                    "overview": "A heroic true story of Major Mukund Varadarajan, an Indian Army officer who displayed extraordinary bravery during a counterterrorism mission in Kashmir’s Shopian district. The film captures his courage in protecting his nation and the devotion of his wife Indhu Rebecaa Varghese.",
                    "popularity": 12.73,
                    "poster_path": "/edQwd95BzHY2XaWAoUgS50A4DHT.jpg",
                    "release_date": "2024-10-31",
                    "title": "Amaran",
                    "video": false,
                    "vote_average": 7.4,
                    "vote_count": 190
                },
                {
                    "adult": false,
                    "backdrop_path": "/x8Kdi1OJbewkeGuijcSmUWrYyk2.jpg",
                    "genre_ids": [
                        28,
                        35,
                        10751,
                        878
                    ],
                    "id": 926670,
                    "original_language": "en",
                    "original_title": "Henry Danger: The Movie",
                    "overview": "Henry Hart meets a superfan—eager to fight crime with Kid Danger—who comes into possession of a device that can open up alternate realities. Facing a wild ride, Henry will need his best friend Jasper and his new superfan sidekick to find his way out or be stuck in another dimension forever.",
                    "popularity": 10.648,
                    "poster_path": "/dFWj2rOGsqSIX1PHFghbCBgpMnk.jpg",
                    "release_date": "2025-01-17",
                    "title": "Henry Danger: The Movie",
                    "video": false,
                    "vote_average": 7.994,
                    "vote_count": 170
                },
                {
                    "adult": false,
                    "backdrop_path": "/u7AZ5CdT2af8buRjmYCPXNyJssd.jpg",
                    "genre_ids": [
                        28,
                        35
                    ],
                    "id": 1160956,
                    "original_language": "zh",
                    "original_title": "熊猫计划",
                    "overview": "International action star Jackie Chan is invited to the adoption ceremony of a rare baby panda, but after an international crime syndicate attempts to kidnap the bear, Jackie has to save the bear using his stunt work skills.",
                    "popularity": 9.4,
                    "poster_path": "/hbO8MVrDuT8YxqeJD6DMxcamY9N.jpg",
                    "release_date": "2024-10-01",
                    "title": "Panda Plan",
                    "video": false,
                    "vote_average": 7,
                    "vote_count": 155
                },
                {
                    "adult": false,
                    "backdrop_path": "/vZG7PrX9HmdgL5qfZRjhJsFYEIA.jpg",
                    "genre_ids": [
                        28,
                        878,
                        12
                    ],
                    "id": 912649,
                    "original_language": "en",
                    "original_title": "Venom: The Last Dance",
                    "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
                    "popularity": 8.493,
                    "poster_path": "/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg",
                    "release_date": "2024-10-22",
                    "title": "Venom: The Last Dance",
                    "video": false,
                    "vote_average": 6.794,
                    "vote_count": 3017
                },
                {
                    "adult": false,
                    "backdrop_path": "/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
                    "genre_ids": [
                        28,
                        12,
                        53
                    ],
                    "id": 539972,
                    "original_language": "en",
                    "original_title": "Kraven the Hunter",
                    "overview": "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
                    "popularity": 8.363,
                    "poster_path": "/1GvBhRxY6MELDfxFrete6BNhBB5.jpg",
                    "release_date": "2024-12-11",
                    "title": "Kraven the Hunter",
                    "video": false,
                    "vote_average": 6.7,
                    "vote_count": 1399
                },
                {
                    "adult": false,
                    "backdrop_path": "/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg",
                    "genre_ids": [
                        28,
                        12,
                        18
                    ],
                    "id": 558449,
                    "original_language": "en",
                    "original_title": "Gladiator II",
                    "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
                    "popularity": 8.243,
                    "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
                    "release_date": "2024-11-13",
                    "title": "Gladiator II",
                    "video": false,
                    "vote_average": 6.772,
                    "vote_count": 3017
                },
                {
                    "adult": false,
                    "backdrop_path": "/hD2SN5bbqxk0kcRmsATJkXObgnZ.jpg",
                    "genre_ids": [
                        28,
                        80,
                        14,
                        53
                    ],
                    "id": 1405338,
                    "original_language": "ja",
                    "original_title": "Demon City 鬼ゴロシ",
                    "overview": "Framed for his family's murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked \"demons\" who have taken over his city.",
                    "popularity": 7.611,
                    "poster_path": "/g5PqsFFrayyRL1Ldgib2lMYuJXg.jpg",
                    "release_date": "2025-02-26",
                    "title": "Demon City",
                    "video": false,
                    "vote_average": 6.855,
                    "vote_count": 145
                },
                {
                    "adult": false,
                    "backdrop_path": "/aqMBEpd4kC8GpUg6761qFPkvQuS.jpg",
                    "genre_ids": [
                        28,
                        80
                    ],
                    "id": 1188104,
                    "original_language": "th",
                    "original_title": "ปล้นทะลุไมล์",
                    "overview": "A fast-paced action drama about siblings desperately needing money for their mother's treatment. Then the brother, who is the stunt performer, inevitably needs to be involved with.",
                    "popularity": 7.176,
                    "poster_path": "/r6vVnsWyESNpiamrfBvnxXYcWlZ.jpg",
                    "release_date": "2023-11-09",
                    "title": "The X-Treme Riders",
                    "video": false,
                    "vote_average": 8.3,
                    "vote_count": 17
                },
                {
                    "adult": false,
                    "backdrop_path": "/iXU87IdtNsYt7n6OigPJBDdbFf1.jpg",
                    "genre_ids": [
                        10751,
                        16,
                        35,
                        28
                    ],
                    "id": 774370,
                    "original_language": "en",
                    "original_title": "Dog Man",
                    "overview": "When a faithful police dog and his human police officer owner are injured together on the job, a harebrained but life-saving surgery fuses the two of them together and Dog Man is born. Dog Man is sworn to protect and serve—and fetch, sit and roll over. As Dog Man embraces his new identity and strives to impress his Chief, he must stop the pretty evil plots of feline supervillain Petey the Cat.",
                    "popularity": 6.652,
                    "poster_path": "/89wNiexZdvLQ41OQWIsQy4O6jAQ.jpg",
                    "release_date": "2025-01-24",
                    "title": "Dog Man",
                    "video": false,
                    "vote_average": 7.722,
                    "vote_count": 162
                },
                {
                    "adult": false,
                    "backdrop_path": "/nhjXe1Gb3Hq8Q5COjsY7ehZyJl4.jpg",
                    "genre_ids": [
                        18,
                        35,
                        53,
                        28
                    ],
                    "id": 1438267,
                    "original_language": "he",
                    "original_title": "גמד מחמד 4",
                    "overview": "Four years have passed since Kfar and Gamadi's last fight, which ended in Gamadi's defeat. As time passes, the neverending threat of Gamadi seems to haunt Kfar, and leads him into a life revolving around the constant seek of revenge, violence and hate. And now with Piggy, his best friend, leaving to join the army. Kfar is left to deal with Gamadi on his own.",
                    "popularity": 15.103,
                    "poster_path": "/9jw0tNgP3pRCq3WioDDbjwOI1n4.jpg",
                    "release_date": "2025-03-16",
                    "title": "Gamad Machmad 4",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/aGgr2Q07AcyiWPGODoofgZDUEHp.jpg",
                    "genre_ids": [
                        28,
                        35,
                        10749
                    ],
                    "id": 1226406,
                    "original_language": "en",
                    "original_title": "Love Hurts",
                    "overview": "A realtor is pulled back into the life he left behind after his former partner-in-crime resurfaces with an ominous message. With his crime-lord brother also on his trail, he must confront his past and the history he never fully buried.",
                    "popularity": 6.312,
                    "poster_path": "/skPPVeHoTTVVSJlb0Ib5vrqiuA4.jpg",
                    "release_date": "2025-02-06",
                    "title": "Love Hurts",
                    "video": false,
                    "vote_average": 6.1,
                    "vote_count": 113
                },
                {
                    "adult": false,
                    "backdrop_path": "/hlfu6g0h0D65SjkVhQBU20zePTl.jpg",
                    "genre_ids": [
                        28,
                        12,
                        14,
                        16
                    ],
                    "id": 1357633,
                    "original_language": "ja",
                    "original_title": "俺だけレベルアップな件 -ReAwakening-",
                    "overview": "Over a decade after 'gates' connecting worlds appeared, awakening 'hunters' with superpowers, weakest hunter Sung Jinwoo encounters a double dungeon and accepts a mysterious quest, becoming the only one able to level up, changing his fate. A catch-up recap of the first season coupled with an exclusive sneak peek of the first two episodes of the highly anticipated second season in one momentous theatrical fan experience.",
                    "popularity": 6.04,
                    "poster_path": "/dblIFen0bNZAq8icJXHwrjfymDW.jpg",
                    "release_date": "2024-11-26",
                    "title": "Solo Leveling -ReAwakening-",
                    "video": false,
                    "vote_average": 6.8,
                    "vote_count": 169
                },
                {
                    "adult": false,
                    "backdrop_path": "/lyBH2mFFU6qrHwD5QKotL2JnEb6.jpg",
                    "genre_ids": [
                        28,
                        35,
                        53
                    ],
                    "id": 1195506,
                    "original_language": "en",
                    "original_title": "Novocaine",
                    "overview": "When the girl of his dreams is kidnapped, everyman Nate turns his inability to feel pain into an unexpected strength in his fight to get her back.",
                    "popularity": 9.753,
                    "poster_path": "/xEXDIJFenYgRwpsJs1mx6hr1DKy.jpg",
                    "release_date": "2025-03-12",
                    "title": "Novocaine",
                    "video": false,
                    "vote_average": 7.9,
                    "vote_count": 10
                },
                {
                    "adult": false,
                    "backdrop_path": "/qSOMdbZ6AOdHR999HWwVAh6ALFI.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53
                    ],
                    "id": 1249289,
                    "original_language": "en",
                    "original_title": "Alarum",
                    "overview": "Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset. Joe and Lara are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as Alarum.",
                    "popularity": 5.707,
                    "poster_path": "/v313aUGmMNj6yNveaiQXysBmjVS.jpg",
                    "release_date": "2025-01-16",
                    "title": "Alarum",
                    "video": false,
                    "vote_average": 5.8,
                    "vote_count": 225
                },
                {
                    "adult": false,
                    "backdrop_path": "/ixKQ55OL3S4Lm0wuKU0s09cVGpX.jpg",
                    "genre_ids": [
                        28,
                        12,
                        53
                    ],
                    "id": 1356039,
                    "original_language": "es",
                    "original_title": "Contraataque",
                    "overview": "When a hostage rescue mission creates a new enemy, Capt. Guerrero and his elite soldiers must face an ambush by a criminal group.",
                    "popularity": 9.43,
                    "poster_path": "/lI2uFlSEkwXKljqiry7coaJ6wIS.jpg",
                    "release_date": "2025-02-27",
                    "title": "Counterattack",
                    "video": false,
                    "vote_average": 8.528,
                    "vote_count": 432
                }
            ]
        },

        comedyMovies: {
            title: "Top Rated",
            movie_data: [
                {
                    "adult": false,
                    "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
                    "genre_ids": [
                        28,
                        878,
                        35,
                        10751,
                        12,
                        14
                    ],
                    "id": 939243,
                    "original_language": "en",
                    "original_title": "Sonic the Hedgehog 3",
                    "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
                    "popularity": 17.029,
                    "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
                    "release_date": "2024-12-19",
                    "title": "Sonic the Hedgehog 3",
                    "video": false,
                    "vote_average": 7.716,
                    "vote_count": 2169
                },
                {
                    "adult": false,
                    "backdrop_path": "/gKqeUlwYiZBDbFU5gT0ev7W3Vzs.jpg",
                    "genre_ids": [
                        53,
                        35,
                        27
                    ],
                    "id": 1013482,
                    "original_language": "en",
                    "original_title": "Borderline",
                    "overview": "A helplessly romantic sociopath escapes from a mental institution and invades the home of a '90s pop superstar. He just wants to be loved; she just wants to survive.",
                    "popularity": 25.005,
                    "poster_path": "/z2yAWt1aAvhxap9mdjlQhXiEJT4.jpg",
                    "release_date": "2025-03-14",
                    "title": "Borderline",
                    "video": false,
                    "vote_average": 5.6,
                    "vote_count": 7
                },
                {
                    "adult": false,
                    "backdrop_path": "/zBKbtf2M7wyThxjrqFO9QGCv5MP.jpg",
                    "genre_ids": [
                        35
                    ],
                    "id": 1417677,
                    "original_language": "en",
                    "original_title": "Bill Burr: Drop Dead Years",
                    "overview": "In what might be his most personal and introspective hour yet, Bill offers hilarious takes on everything from male sadness to dating advice.",
                    "popularity": 23.195,
                    "poster_path": "/dlH5f6BXK8C0m1OV6ExsGit8l8e.jpg",
                    "release_date": "2025-03-14",
                    "title": "Bill Burr: Drop Dead Years",
                    "video": false,
                    "vote_average": 7.6,
                    "vote_count": 5
                },
                {
                    "adult": false,
                    "backdrop_path": "/iYVTjTqGraQFr2mh3o4UB07LwYu.jpg",
                    "genre_ids": [
                        10749,
                        35,
                        18
                    ],
                    "id": 1291321,
                    "original_language": "ta",
                    "original_title": "ஸ்வீட் ஹார்ட்",
                    "overview": "Vasu, a gifted animator with a troubled past, is forced to face his commitment issues when his partner Manu reveals her pregnancy.",
                    "popularity": 22.77,
                    "poster_path": "/bHxP4Mdgc6RwFZi7b1JDPXDus8j.jpg",
                    "release_date": "2025-03-14",
                    "title": "Sweet Heart",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/DwRNhzn6yidczoiBZwZy8gdD64.jpg",
                    "genre_ids": [
                        35
                    ],
                    "id": 1326693,
                    "original_language": "pl",
                    "original_title": "Wujek foliarz",
                    "overview": "Kuba is undergoing mandatory addiction therapy when he is kidnapped by his eccentric uncle – a conspiracy theorist who believes in the imminent end of the world. The uncle and his team of journalists from the \"Prawda TV\" channel want to involve him in their secret plan to prove that the mayoral elections were rigged. Initially skeptical of his uncle's obsession, Kuba discovers that the village is threatened with a real ecological disaster and decides to act. The situation is further complicated by his former love, Gośka. All this forces him to take matters into his own hands and make decisions that he has been running away from so far.",
                    "popularity": 22.641,
                    "poster_path": "/m7KL3ufmOQyf8LSgQ87FPNKKw4v.jpg",
                    "release_date": "2025-03-14",
                    "title": "Wujek foliarz",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/eJpNYNXB98hIK2s97hQKvtY2CJw.jpg",
                    "genre_ids": [
                        35
                    ],
                    "id": 1208803,
                    "original_language": "en",
                    "original_title": "The Regulars",
                    "overview": "Set in London's iconic Prince Charles Cinema, The Regulars follows a day in the life of its hapless employees. During their shift they watch movies, argue with customers, and, above all, deal with each other.",
                    "popularity": 22.501,
                    "poster_path": "/uXcTWEMxpKGRzhBTJkFdFAYJnab.jpg",
                    "release_date": "2025-03-14",
                    "title": "The Regulars",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        18,
                        35,
                        10749
                    ],
                    "id": 1442388,
                    "original_language": "en",
                    "original_title": "Bukan Jodoh Biasa Nih",
                    "overview": "Tells the story of Richard, Jonggi and Lingga, three miskom students who are trying to overcome routine financial problems. Of the many solution options that they often debated, they finally came up with one method that made Richard and his friends take a desperate path. Serve Mr. Brandon's challenge to get a hidden secret box in exchange for money and the heart of his daughter, Marsya.",
                    "popularity": 13.433,
                    "poster_path": "/vwQBsapRSSKuGefT2W3qXIrt56v.jpg",
                    "release_date": "2025-03-13",
                    "title": "Bukan Jodoh Biasa Nih",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/33yXWNsQK272i9NhbbXv0dC30ED.jpg",
                    "genre_ids": [
                        35
                    ],
                    "id": 1424352,
                    "original_language": "en",
                    "original_title": "Taympers",
                    "overview": "An innocent child Yumi is suddenly introduced to the world of womanhood when she witnesses her older sister Chloe feel pain in her body.",
                    "popularity": 22.367,
                    "poster_path": "/ptAQ9vlCGv7uSgMkLPZzPYkuMKH.jpg",
                    "release_date": "2025-03-14",
                    "title": "Taympers",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        10749,
                        35
                    ],
                    "id": 1426337,
                    "original_language": "tl",
                    "original_title": "Fleeting",
                    "overview": "A dreamer who wants to fly around the world meets an unambitious heir with whom she forges an improbable romance.",
                    "popularity": 22.361,
                    "poster_path": "/8dLXLQpjDUt6MwXiVHT3rqjG4Rs.jpg",
                    "release_date": "2025-03-14",
                    "title": "Fleeting",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/uXEO14VpvfaCxRLWeHCLfYKCcKC.jpg",
                    "genre_ids": [
                        16,
                        35,
                        10402
                    ],
                    "id": 1432101,
                    "original_language": "de",
                    "original_title": "müssen müssen",
                    "overview": "",
                    "popularity": 22.344,
                    "poster_path": "/361LsDbpmOBVu5r0kqhoT6OYtw5.jpg",
                    "release_date": "2025-03-14",
                    "title": "müssen müssen",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/6CdhDmsrQxIuonHmkLOQN6lCZm9.jpg",
                    "genre_ids": [
                        35,
                        10749
                    ],
                    "id": 1433574,
                    "original_language": "zh",
                    "original_title": "非标准恋爱",
                    "overview": "",
                    "popularity": 22.34,
                    "poster_path": "/x0TarHukSxcMYuqogZNjzeiLzae.jpg",
                    "release_date": "2025-03-14",
                    "title": "Tall Girl",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/fGQCss2nAosaRfaa4NXyr0ZfiEB.jpg",
                    "genre_ids": [
                        10770,
                        35,
                        10749
                    ],
                    "id": 1418287,
                    "original_language": "en",
                    "original_title": "Royal-ish",
                    "overview": "Lacey is an amusement park princess who befriends 8-year-old Rose, a real-life princess, and is recruited by her handsome father to travel to their kingdom and be the new governess.",
                    "popularity": 21.913,
                    "poster_path": "/eviXuwmjoxSRzAz0sdkkvOEjNgh.jpg",
                    "release_date": "2025-03-15",
                    "title": "Royal-ish",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/IwADj3Pn2s9SLSthhBxZp3X53g.jpg",
                    "genre_ids": [
                        18,
                        35,
                        80
                    ],
                    "id": 1442417,
                    "original_language": "en",
                    "original_title": "A Murder in Oakland: Beauty is Deadly",
                    "overview": "Recently cleared of an embezzlement charge, Detective Williams (Marcus D Spencer) is handed a high-profile murder case while also forced to take on a new partner. Williams is trying to solve this case while also working to see if he can trust his partner.",
                    "popularity": 22.594,
                    "poster_path": "/iGz5PJNLHKZnWI2x36kP8igIZOe.jpg",
                    "release_date": "2025-03-14",
                    "title": "A Murder in Oakland: Beauty is Deadly",
                    "video": false,
                    "vote_average": 1,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/b1Pms8IQTCzZimyliCx8CFeqfSa.jpg",
                    "genre_ids": [
                        35,
                        18,
                        27
                    ],
                    "id": 1275248,
                    "original_language": "en",
                    "original_title": "Sister Midnight",
                    "overview": "In Mumbai, an arranged marriage spirals into darkness as the spineless husband watches his wife morph into a ruthless, feral force within their marital confines.",
                    "popularity": 22.522,
                    "poster_path": "/lXMJ6un3SZvRq8cOHap7LviY5hG.jpg",
                    "release_date": "2025-03-14",
                    "title": "Sister Midnight",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/qQn52VABdwlsHgsRT1RoWsMR3cO.jpg",
                    "genre_ids": [
                        10749,
                        35
                    ],
                    "id": 1404722,
                    "original_language": "zh",
                    "original_title": "真爱营业",
                    "overview": "Influencer couple Xu Xiaoli and her \"hired boyfriend\" Hao Zha face a fan crisis and pressure from their boss. In response, Xu Xiaoli plans a fake wedding, but when Hao Zha unexpectedly disappears, she embarks on a wild chase to find him. Will their relationship survive the chaos?",
                    "popularity": 21.109,
                    "poster_path": "/lEnfI1fM97TYUSj4NykkUwI1yYF.jpg",
                    "release_date": "2025-03-15",
                    "title": "Liar, Liar, Love is on Fire",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/9JwHIV82IQOhUTV8w1FlFQnKBZC.jpg",
                    "genre_ids": [
                        53,
                        35
                    ],
                    "id": 1399893,
                    "original_language": "en",
                    "original_title": "Dead-Weight",
                    "overview": "When three high school graduates supply booze for the big party, they discover their cargo isn't what they expected.",
                    "popularity": 21.104,
                    "poster_path": "/7FIlPqSh9i8uSmyrimpRj6rbWag.jpg",
                    "release_date": "2025-03-15",
                    "title": "Dead-Weight",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/87GU2ifjNYtgYtcRH1NNH1P4ODo.jpg",
                    "genre_ids": [
                        18,
                        35,
                        10749
                    ],
                    "id": 1064213,
                    "original_language": "en",
                    "original_title": "Anora",
                    "overview": "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
                    "popularity": 20.921,
                    "poster_path": "/qh8m8Udz0sCa5gy9VaqfHPh0yPM.jpg",
                    "release_date": "2024-10-14",
                    "title": "Anora",
                    "video": false,
                    "vote_average": 7.061,
                    "vote_count": 1708
                },
                {
                    "adult": false,
                    "backdrop_path": "/8OVKpEk05Wiwiim1tb69N5pYNW1.jpg",
                    "genre_ids": [
                        35
                    ],
                    "id": 1443663,
                    "original_language": "pt",
                    "original_title": "Os Infanticidas",
                    "overview": "",
                    "popularity": 12.915,
                    "poster_path": "/bDfpGgNuPOspTBKwjjcm88eBpDI.jpg",
                    "release_date": "2025-03-13",
                    "title": "Os Infanticidas",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": null,
                    "genre_ids": [
                        35
                    ],
                    "id": 1443487,
                    "original_language": "kk",
                    "original_title": "Малай",
                    "overview": "The young rich kid, Chyna, got carried away with his glamorous lifestyle and decided that he could do anything he wanted. Desperate to set his son straight, his oligarch father takes extreme measures. Together with an eccentric psychologist, he devises a unique project: somewhere in the steppe, they recreate the atmosphere of a 19th-century Kazakh village. Chyna ends up in this village, believing he has traveled back in time.",
                    "popularity": 12.915,
                    "poster_path": "/5oCOv4RHG2ekybDL1uWf7xW9AvV.jpg",
                    "release_date": "2025-03-13",
                    "title": "Малай",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/fpgqxOkwFiuwWNRz58TKc67dXdb.jpg",
                    "genre_ids": [
                        18,
                        35
                    ],
                    "id": 1443470,
                    "original_language": "es",
                    "original_title": "Moiras",
                    "overview": "Three friends recall how the little details of their lives brought about their friendship.",
                    "popularity": 12.915,
                    "poster_path": "/ipOozs8Q5py5zqMJFZM78m2CGDi.jpg",
                    "release_date": "2025-03-13",
                    "title": "Moiras",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                }
            ]
        },

        crimeMovies: {
            title: "Top Rated",
            movie_data: [
                {
                    "adult": false,
                    "backdrop_path": "/gFFqWsjLjRfipKzlzaYPD097FNC.jpg",
                    "genre_ids": [
                        28,
                        53,
                        80
                    ],
                    "id": 1126166,
                    "original_language": "en",
                    "original_title": "Flight Risk",
                    "overview": "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
                    "popularity": 25.919,
                    "poster_path": "/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
                    "release_date": "2025-01-22",
                    "title": "Flight Risk",
                    "video": false,
                    "vote_average": 6.115,
                    "vote_count": 470
                },
                {
                    "adult": false,
                    "backdrop_path": "/o4onk5Khih3vnZeHI2Rf2zyMWN6.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53
                    ],
                    "id": 1149167,
                    "original_language": "en",
                    "original_title": "High Rollers",
                    "overview": "Mason, a master thief, lives a dream life of riches with his crew and girlfriend Decker. When nemesis Salazar kidnaps Decker, Mason must attempt a high-stakes casino heist to save her, all while evading Salazar’s rivals and the FBI.",
                    "popularity": 24.013,
                    "poster_path": "/hHowAaChDjwueySmwVbsjHmpWa.jpg",
                    "release_date": "2025-03-14",
                    "title": "High Rollers",
                    "video": false,
                    "vote_average": 6.5,
                    "vote_count": 4
                },
                {
                    "adult": false,
                    "backdrop_path": "/4HnBkc45h6ABO9i6rbPHTqlKUu8.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 1013601,
                    "original_language": "en",
                    "original_title": "The Alto Knights",
                    "overview": "Two of New York's most notorious organized crime bosses, Frank Costello and Vito Genovese, vie for control of the city's streets. Once the best of friends, petty jealousies and a series of betrayals place them on a deadly collision course that will reshape the Mafia (and America) forever.",
                    "popularity": 23.418,
                    "poster_path": "/95KmR0xNuZZ6DNESDwLKWGIBvMg.jpg",
                    "release_date": "2025-03-14",
                    "title": "The Alto Knights",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/IwADj3Pn2s9SLSthhBxZp3X53g.jpg",
                    "genre_ids": [
                        18,
                        35,
                        80
                    ],
                    "id": 1442417,
                    "original_language": "en",
                    "original_title": "A Murder in Oakland: Beauty is Deadly",
                    "overview": "Recently cleared of an embezzlement charge, Detective Williams (Marcus D Spencer) is handed a high-profile murder case while also forced to take on a new partner. Williams is trying to solve this case while also working to see if he can trust his partner.",
                    "popularity": 22.594,
                    "poster_path": "/iGz5PJNLHKZnWI2x36kP8igIZOe.jpg",
                    "release_date": "2025-03-14",
                    "title": "A Murder in Oakland: Beauty is Deadly",
                    "video": false,
                    "vote_average": 1,
                    "vote_count": 1
                },
                {
                    "adult": false,
                    "backdrop_path": "/k9Iw1EIVkPrhEbEn6Pxbj59izOG.jpg",
                    "genre_ids": [
                        80,
                        18
                    ],
                    "id": 1444425,
                    "original_language": "pa",
                    "original_title": "ਛੇ-ਛੇ",
                    "overview": "A student in Canada faces charges in her husband's death after allegedly deceiving him for visa purposes, highlighting immigrant families' desperate pursuit of opportunities.",
                    "popularity": 14.76,
                    "poster_path": "/nYHk4K1mDWPYMK7C52DSkfoG98X.jpg",
                    "release_date": "2025-03-14",
                    "title": "Six Each",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/nAzIzu91kxTpFlWefmjkPnhfp51.jpg",
                    "genre_ids": [
                        80,
                        18,
                        53
                    ],
                    "id": 1165393,
                    "original_language": "en",
                    "original_title": "Persona",
                    "overview": "A talented young impersonator falls for a mysterious stranger and is slowly lured into assuming the identity of a missing ivy-league student.",
                    "popularity": 11.064,
                    "poster_path": "/6U7RT5qp97DZhPD5ldAYHFYeggE.jpg",
                    "release_date": "2025-03-14",
                    "title": "Persona",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/dFzKhPaC4wIMmp6eHQr1a2EBstH.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 1361451,
                    "original_language": "ca",
                    "original_title": "La terra negra",
                    "overview": "Miquel moves to a town in the Spanish countryside. He is there to work in an industrial mill, ran by siblings María and Ángel. María, who dislikes her work and the neighbours she has to do business with, finds in Miquel a person similar to her.",
                    "popularity": 10.744,
                    "poster_path": "/3iRxZlTSkXUON99zEq1iZQV2VH2.jpg",
                    "release_date": "2025-03-17",
                    "title": "La terra negra",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/hD2SN5bbqxk0kcRmsATJkXObgnZ.jpg",
                    "genre_ids": [
                        28,
                        80,
                        14,
                        53
                    ],
                    "id": 1405338,
                    "original_language": "ja",
                    "original_title": "Demon City 鬼ゴロシ",
                    "overview": "Framed for his family's murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked \"demons\" who have taken over his city.",
                    "popularity": 7.611,
                    "poster_path": "/g5PqsFFrayyRL1Ldgib2lMYuJXg.jpg",
                    "release_date": "2025-02-26",
                    "title": "Demon City",
                    "video": false,
                    "vote_average": 6.9,
                    "vote_count": 145
                },
                {
                    "adult": false,
                    "backdrop_path": "/aqMBEpd4kC8GpUg6761qFPkvQuS.jpg",
                    "genre_ids": [
                        28,
                        80
                    ],
                    "id": 1188104,
                    "original_language": "th",
                    "original_title": "ปล้นทะลุไมล์",
                    "overview": "A fast-paced action drama about siblings desperately needing money for their mother's treatment. Then the brother, who is the stunt performer, inevitably needs to be involved with.",
                    "popularity": 7.176,
                    "poster_path": "/r6vVnsWyESNpiamrfBvnxXYcWlZ.jpg",
                    "release_date": "2023-11-09",
                    "title": "The X-Treme Riders",
                    "video": false,
                    "vote_average": 8.3,
                    "vote_count": 17
                },
                {
                    "adult": false,
                    "backdrop_path": "/9vAoubhoZE8aSkUZoSfxs3UWZhO.jpg",
                    "genre_ids": [
                        53,
                        28,
                        80
                    ],
                    "id": 156022,
                    "original_language": "en",
                    "original_title": "The Equalizer",
                    "overview": "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
                    "popularity": 6.58,
                    "poster_path": "/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
                    "release_date": "2014-09-24",
                    "title": "The Equalizer",
                    "video": false,
                    "vote_average": 7.279,
                    "vote_count": 9233
                },
                {
                    "adult": false,
                    "backdrop_path": "/vabhkZ3vwf8u7yXCSi3zbVzAVRa.jpg",
                    "genre_ids": [
                        80,
                        18,
                        53
                    ],
                    "id": 242582,
                    "original_language": "en",
                    "original_title": "Nightcrawler",
                    "overview": "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
                    "popularity": 6.543,
                    "poster_path": "/gYPIRu0jX2CGYdeO422cq3N78ju.jpg",
                    "release_date": "2014-10-23",
                    "title": "Nightcrawler",
                    "video": false,
                    "vote_average": 7.705,
                    "vote_count": 10941
                },
                {
                    "adult": false,
                    "backdrop_path": "/6GO0ffzpFxDVNDmjARQqash9LFb.jpg",
                    "genre_ids": [
                        10770,
                        80
                    ],
                    "id": 1438233,
                    "original_language": "de",
                    "original_title": "Tod am Rennsteig - Haus der Toten",
                    "overview": "Two married couples are murdered by an unknown person, including the restaurant owners Sardini, whose daughter is the only survivor. She can't remember anything, but criminal psychologist Annett Schuster and profiler Jan Kawig think she is the key to solving the case.",
                    "popularity": 6.267,
                    "poster_path": "/aIUILOJm7QvnF29QTROETDzRKhD.jpg",
                    "release_date": "2025-03-11",
                    "title": "Tod am Rennsteig - Haus der Toten",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/kydclLUnhGMuoCxl6VRfSSwdRRO.jpg",
                    "genre_ids": [
                        18,
                        80
                    ],
                    "id": 154400,
                    "original_language": "en",
                    "original_title": "The Drop",
                    "overview": "Bob Saginowski finds himself at the center of a robbery gone awry and entwined in an investigation that digs deep into the neighborhood's past where friends, families, and foes all work together to make a living - no matter the cost.",
                    "popularity": 6.206,
                    "poster_path": "/olQInYvVCW2wycMSU1ogo9Jshml.jpg",
                    "release_date": "2014-09-12",
                    "title": "The Drop",
                    "video": false,
                    "vote_average": 6.788,
                    "vote_count": 2214
                },
                {
                    "adult": false,
                    "backdrop_path": "/ysiy0W9nHVTPovvskS34R6ym1Hh.jpg",
                    "genre_ids": [
                        80,
                        28,
                        53
                    ],
                    "id": 254904,
                    "original_language": "en",
                    "original_title": "The November Man",
                    "overview": "An ex-CIA operative is brought back in on a very personal mission and finds himself pitted against his former pupil in a deadly game involving high level CIA officials and the Russian president-elect.",
                    "popularity": 6.193,
                    "poster_path": "/4ejNFbCgLMDAuy7jFQmc7cr6UAW.jpg",
                    "release_date": "2014-08-27",
                    "title": "The November Man",
                    "video": false,
                    "vote_average": 6.103,
                    "vote_count": 1493
                },
                {
                    "adult": false,
                    "backdrop_path": "/9Xna1fmRkTyAfMSonokrwblYXUS.jpg",
                    "genre_ids": [
                        53,
                        80,
                        28
                    ],
                    "id": 265208,
                    "original_language": "en",
                    "original_title": "Wild Card",
                    "overview": "When a Las Vegas bodyguard with lethal skills and a gambling problem gets in trouble with the mob, he has one last play… and it's all or nothing.",
                    "popularity": 6.191,
                    "poster_path": "/zN80Tlly8oMpKbVJv2TfRIj8dHG.jpg",
                    "release_date": "2015-01-14",
                    "title": "Wild Card",
                    "video": false,
                    "vote_average": 5.677,
                    "vote_count": 1804
                },
                {
                    "adult": false,
                    "backdrop_path": "/3pKIcv6KhUE35jsKnv3MylQ3OT2.jpg",
                    "genre_ids": [
                        80,
                        28,
                        878
                    ],
                    "id": 198184,
                    "original_language": "en",
                    "original_title": "Chappie",
                    "overview": "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
                    "popularity": 6.137,
                    "poster_path": "/6zmKkfSvo4tBtvGSjn5PofWIvP9.jpg",
                    "release_date": "2015-03-04",
                    "title": "Chappie",
                    "video": false,
                    "vote_average": 6.785,
                    "vote_count": 8000
                },
                {
                    "adult": false,
                    "backdrop_path": "/8qXc6OLHoLHBxOFIjsfbZwWDFYH.jpg",
                    "genre_ids": [
                        28,
                        80,
                        18,
                        53
                    ],
                    "id": 1230208,
                    "original_language": "fr",
                    "original_title": "Bastion 36",
                    "overview": "Forced out of his elite unit, a troubled cop launches his own rogue investigation when mysterious killings claim the lives of his former colleagues.",
                    "popularity": 6.128,
                    "poster_path": "/AnDwpI8dY8iqJVUwVS5UotYAbB1.jpg",
                    "release_date": "2025-02-27",
                    "title": "Squad 36",
                    "video": false,
                    "vote_average": 6.241,
                    "vote_count": 85
                },
                {
                    "adult": false,
                    "backdrop_path": "/sUmMrrVEpXsBs0YYvATvPkGNcBH.jpg",
                    "genre_ids": [
                        18,
                        80,
                        10751,
                        9648
                    ],
                    "id": 280996,
                    "original_language": "en",
                    "original_title": "Mr. Holmes",
                    "overview": "In 1947, long-retired and near the end of his life, Sherlock Holmes grapples with an unreliable memory and must rely on his housekeeper's son as he revisits the still-unsolved case that led to his retirement.",
                    "popularity": 5.896,
                    "poster_path": "/nNHkoefLcdtaHyG08G8aDn1yFMw.jpg",
                    "release_date": "2015-06-19",
                    "title": "Mr. Holmes",
                    "video": false,
                    "vote_average": 6.5,
                    "vote_count": 1863
                },
                {
                    "adult": false,
                    "backdrop_path": "/rxMnmklIpunsNsRkQ7hw61ZJa84.jpg",
                    "genre_ids": [
                        80,
                        28,
                        53
                    ],
                    "id": 189,
                    "original_language": "en",
                    "original_title": "Sin City: A Dame to Kill For",
                    "overview": "Some of Sin City's most hard-boiled citizens cross paths with a few of its more reviled inhabitants.",
                    "popularity": 5.861,
                    "poster_path": "/50kALxDX4mmzIRljbNbPY0u4cie.jpg",
                    "release_date": "2014-08-20",
                    "title": "Sin City: A Dame to Kill For",
                    "video": false,
                    "vote_average": 6.39,
                    "vote_count": 3889
                },
                {
                    "adult": false,
                    "backdrop_path": "/k23FPWl97XKpJ1oTaDyADzxWxs6.jpg",
                    "genre_ids": [
                        80,
                        18,
                        9648,
                        53
                    ],
                    "id": 169917,
                    "original_language": "en",
                    "original_title": "A Walk Among the Tombstones",
                    "overview": "Private investigator Matthew Scudder is hired by a drug kingpin to find out who kidnapped and murdered his wife.",
                    "popularity": 5.767,
                    "poster_path": "/euPgyPsiNFp6gOBB7nUFxvN5ZaY.jpg",
                    "release_date": "2014-09-18",
                    "title": "A Walk Among the Tombstones",
                    "video": false,
                    "vote_average": 6.326,
                    "vote_count": 2828
                }
            ]
        },

        horrorMovies: {
            title: "Top Rated",
            movie_data:[
            {
                "adult": false,
                "backdrop_path": "/gKqeUlwYiZBDbFU5gT0ev7W3Vzs.jpg",
                "genre_ids": [
                    53,
                    35,
                    27
                ],
                "id": 1013482,
                "original_language": "en",
                "original_title": "Borderline",
                "overview": "A helplessly romantic sociopath escapes from a mental institution and invades the home of a '90s pop superstar. He just wants to be loved; she just wants to survive.",
                "popularity": 25.005,
                "poster_path": "/z2yAWt1aAvhxap9mdjlQhXiEJT4.jpg",
                "release_date": "2025-03-14",
                "title": "Borderline",
                "video": false,
                "vote_average": 5.6,
                "vote_count": 7
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27,
                    9648,
                    53
                ],
                "id": 1306707,
                "original_language": "en",
                "original_title": "I Don't Like It Here",
                "overview": "A recently paroled outsider returns to his desolate hometown, only to find a community plagued by a disturbing darkness. As he grapples with his own past and the town’s sinister secrets, he becomes the prime suspect in a series of gruesome murders.",
                "popularity": 22.714,
                "poster_path": "/bdwrJZ0Ue9I3M8OsTP3FuFSbpB.jpg",
                "release_date": "2025-03-14",
                "title": "I Don't Like It Here",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/zySLhWnLLVsIswnbF3q5IlOLVW7.jpg",
                "genre_ids": [
                    18,
                    27,
                    9648
                ],
                "id": 1429788,
                "original_language": "id",
                "original_title": "Samar",
                "overview": "After moving into her family's abandoned house, horror comic artist Ilmira struggles to complete her latest work while battling financial hardship. But when eerie figures from her past stories come to life—especially the haunting Hooded Woman—her reality spirals into a nightmare, forcing her to confront a buried childhood trauma.",
                "popularity": 13.622,
                "poster_path": "/waEYWR595cnmkr2OXFjasgGyZGt.jpg",
                "release_date": "2025-03-13",
                "title": "Nightmare",
                "video": false,
                "vote_average": 6.7,
                "vote_count": 3
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    14,
                    27
                ],
                "id": 1077281,
                "original_language": "ko",
                "original_title": "커플지옥",
                "overview": "A couple is kidnapped by a serial killer on their first anniversary. The kidnapper forces the couple to play a twisted game of rock paper scissors. Hyunsoo encounters a lady who looks very similar to his favorite adult streamer while delivering food to her. He gradually begins to believe that the lady is indeed the streamer and tries to contact her. Sumi needs to buy a luxury bag for her boyfriend’s birthday. But the bag is too expensive for her to purchase. So, she makes a unique trade with a wizard. Ji-Eun, who lives with her ill boyfriend, goes out every night but her daily life collapses when she brings a guy she meets at a jazz bar to her house.",
                "popularity": 13.466,
                "poster_path": "/djnHdHdwiLGYYuUydOSykpp8kdl.jpg",
                "release_date": "2025-03-13",
                "title": "Couples to Hell",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/5VSrIF6njdpTHpRLF9nzOhwmFUi.jpg",
                "genre_ids": [
                    27
                ],
                "id": 1429784,
                "original_language": "id",
                "original_title": "Singsot: Siulan Kematian",
                "overview": "A kid defies the ancient taboo of whistling at dusk, unleashing a sinister terror tied to a cursed figure who made the same mistake. Bound by an inescapable curse, he’s thrust into a deadly race against time—because if he fails, the nightmare will become his new reality.",
                "popularity": 13.453,
                "poster_path": "/llZca2miwygKwuyWUpyONCL6VAR.jpg",
                "release_date": "2025-03-13",
                "title": "Singsot: Siulan Kematian",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1442386,
                "original_language": "en",
                "original_title": "Uwentira: Kota Jin",
                "overview": "A woman named Dewi visited the city of Palu to look for Salena, her acquaintance. When she arrived at the village, Tiara, her friend, welcomed Dewi warmly. However, Tiara's expression turned cold for a split second when Dewi said the word \"Uwentira\". Tiara's panic increased when she slowly realized the strange behavior of her old friend. A few seconds later, Tiara was sure that the Goddess in front of her now was not the Goddess she knew.",
                "popularity": 13.433,
                "poster_path": "/1ejZLOpStxnw2RhtlxNHuQ9bJoa.jpg",
                "release_date": "2025-03-13",
                "title": "Uwentira: Kota Jin",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/fXcWrJdBVGGhmAoUPltieJJFFxF.jpg",
                "genre_ids": [
                    27
                ],
                "id": 1440087,
                "original_language": "bg",
                "original_title": "Скрити в мрака",
                "overview": "",
                "popularity": 22.321,
                "poster_path": "/2kjoayUhf8Uta1GmIiuGTSkGICS.jpg",
                "release_date": "2025-03-14",
                "title": "Скрити в мрака",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433811,
                "original_language": "en",
                "original_title": "Cold Read",
                "overview": "\"Cold Read\" we follow Bugs, a struggling actor desperate to prove to his girlfriend and the rest of the world that he has what it takes to achieve his dreams. But when fate comes knocking with an audition for a mysterious new project, will he be willing to go to the dark places the role requires?",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "Cold Read",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433908,
                "original_language": "en",
                "original_title": "Surprise",
                "overview": "A horror short film.",
                "popularity": 22.339,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "Surprise",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433906,
                "original_language": "en",
                "original_title": "After Death Do Us Part",
                "overview": "A horror short film.",
                "popularity": 22.339,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "After Death Do Us Part",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433872,
                "original_language": "en",
                "original_title": "Herman 2",
                "overview": "A short horror film.",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "Herman 2",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433862,
                "original_language": "en",
                "original_title": "Wolves in the Trenches",
                "overview": "A short horror film.",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "Wolves in the Trenches",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433860,
                "original_language": "en",
                "original_title": "The Buried River",
                "overview": "A short horror film.",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "The Buried River",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433838,
                "original_language": "en",
                "original_title": "Grin",
                "overview": "When newly elected mayor Frank Ford's failed attempts to run the local freak show out of town, Grady Nelson the ring master, and father figure to Grin, Karnage, and Kisses is murdered. Grin is well aware of who committed this heinous act, and The Circus Rejects seek revenge on the mayor and everyone who stands in their way!",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "Grin",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433802,
                "original_language": "en",
                "original_title": "Grinners",
                "overview": "Marley is a moderately successful horror cooking show host. Her life gets flipped upside down when she crosses paths with the voyeuristic possum mask. Marley has to survive the night as she is hunted down through the eyes of a possum.",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "Grinners",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433836,
                "original_language": "en",
                "original_title": "Stalker",
                "overview": "A young woman must confront her deepest fears if she hopes to survive the night.",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "Stalker",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27
                ],
                "id": 1433813,
                "original_language": "en",
                "original_title": "Sister's Keeper",
                "overview": "A horror short film.",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "Sister's Keeper",
                "video": false,
                "vote_average": 1,
                "vote_count": 1
            },
            {
                "adult": false,
                "backdrop_path": "/b1Pms8IQTCzZimyliCx8CFeqfSa.jpg",
                "genre_ids": [
                    35,
                    18,
                    27
                ],
                "id": 1275248,
                "original_language": "en",
                "original_title": "Sister Midnight",
                "overview": "In Mumbai, an arranged marriage spirals into darkness as the spineless husband watches his wife morph into a ruthless, feral force within their marital confines.",
                "popularity": 22.522,
                "poster_path": "/lXMJ6un3SZvRq8cOHap7LviY5hG.jpg",
                "release_date": "2025-03-14",
                "title": "Sister Midnight",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/foe9jC7vtQxqIxE6lPq0nnTckU0.jpg",
                "genre_ids": [
                    10402,
                    27
                ],
                "id": 1371370,
                "original_language": "es",
                "original_title": "Skarlett",
                "overview": "Paying homage to 70's grindhouse and B-Movies with music by The Brujas, this music video follows a cannibal bassist that seeks her next victim in a sleazy bar, using her charms to seduce him and then eat him alive, a character introduced in the band's previous single: \"Caníbal\".",
                "popularity": 22.532,
                "poster_path": "/tSJZe7yAlCB8FSePeg1IqQYDv9B.jpg",
                "release_date": "2025-03-14",
                "title": "Skarlett",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    16,
                    14,
                    9648,
                    27
                ],
                "id": 1322218,
                "original_language": "ja",
                "original_title": "劇場版モノノ怪 第二章 火鼠",
                "overview": "Second installment of the Mononoke movie trilogy.",
                "popularity": 22.658,
                "poster_path": "/bT2qcTXVNUbeIMjbggB14Wyymgi.jpg",
                "release_date": "2025-03-14",
                "title": "Mononoke the Movie: The Ashes of Rage",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            }
        ]},

        thrillerMovies: {
            title: "Top Rated",
            movie_data:[
            {
                "adult": false,
                "backdrop_path": "/gFFqWsjLjRfipKzlzaYPD097FNC.jpg",
                "genre_ids": [
                    28,
                    53,
                    80
                ],
                "id": 1126166,
                "original_language": "en",
                "original_title": "Flight Risk",
                "overview": "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
                "popularity": 25.919,
                "poster_path": "/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
                "release_date": "2025-01-22",
                "title": "Flight Risk",
                "video": false,
                "vote_average": 6.1,
                "vote_count": 469
            },
            {
                "adult": false,
                "backdrop_path": "/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg",
                "genre_ids": [
                    10749,
                    878,
                    53
                ],
                "id": 950396,
                "original_language": "en",
                "original_title": "The Gorge",
                "overview": "Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.",
                "popularity": 27.269,
                "poster_path": "/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
                "release_date": "2025-02-13",
                "title": "The Gorge",
                "video": false,
                "vote_average": 7.8,
                "vote_count": 1915
            },
            {
                "adult": false,
                "backdrop_path": "/gKqeUlwYiZBDbFU5gT0ev7W3Vzs.jpg",
                "genre_ids": [
                    53,
                    35,
                    27
                ],
                "id": 1013482,
                "original_language": "en",
                "original_title": "Borderline",
                "overview": "A helplessly romantic sociopath escapes from a mental institution and invades the home of a '90s pop superstar. He just wants to be loved; she just wants to survive.",
                "popularity": 25.005,
                "poster_path": "/z2yAWt1aAvhxap9mdjlQhXiEJT4.jpg",
                "release_date": "2025-03-14",
                "title": "Borderline",
                "video": false,
                "vote_average": 5.6,
                "vote_count": 7
            },
            {
                "adult": false,
                "backdrop_path": "/6J259Zuq09Bt2PLUNeTS5a3DwLZ.jpg",
                "genre_ids": [
                    28,
                    53
                ],
                "id": 1212855,
                "original_language": "en",
                "original_title": "Fight or Flight",
                "overview": "A mercenary takes on the job of tracking down a target on a plane but must protect her when they're surrounded by people trying to kill both of them.",
                "popularity": 15.053,
                "poster_path": "/x4nWnfgJvL045rcUCSJzfgIIY9i.jpg",
                "release_date": "2025-03-13",
                "title": "Fight or Flight",
                "video": false,
                "vote_average": 6.4,
                "vote_count": 18
            },
            {
                "adult": false,
                "backdrop_path": "/o4onk5Khih3vnZeHI2Rf2zyMWN6.jpg",
                "genre_ids": [
                    28,
                    80,
                    53
                ],
                "id": 1149167,
                "original_language": "en",
                "original_title": "High Rollers",
                "overview": "Mason, a master thief, lives a dream life of riches with his crew and girlfriend Decker. When nemesis Salazar kidnaps Decker, Mason must attempt a high-stakes casino heist to save her, all while evading Salazar’s rivals and the FBI.",
                "popularity": 24.013,
                "poster_path": "/hHowAaChDjwueySmwVbsjHmpWa.jpg",
                "release_date": "2025-03-14",
                "title": "High Rollers",
                "video": false,
                "vote_average": 6.5,
                "vote_count": 4
            },
            {
                "adult": false,
                "backdrop_path": "/qkswMUEGRIiPIEf9hFnhPnUbXCN.jpg",
                "genre_ids": [
                    53,
                    18
                ],
                "id": 1130863,
                "original_language": "fr",
                "original_title": "Belle",
                "overview": "A couple have a peaceful existence in a small provincial town. He is a teacher and she runs an opticians practical. Their life is turned upside when Belle, a friend’s daughter who is lodging with them, is found dead in her room.  The husband becomes the prime suspect as the only one at home at the time.",
                "popularity": 13.665,
                "poster_path": "/5YITitG67kcHNUDJdP5XodlkTlm.jpg",
                "release_date": "2025-03-13",
                "title": "Belle",
                "video": false,
                "vote_average": 7.75,
                "vote_count": 2
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    27,
                    9648,
                    53
                ],
                "id": 1306707,
                "original_language": "en",
                "original_title": "I Don't Like It Here",
                "overview": "A recently paroled outsider returns to his desolate hometown, only to find a community plagued by a disturbing darkness. As he grapples with his own past and the town’s sinister secrets, he becomes the prime suspect in a series of gruesome murders.",
                "popularity": 22.714,
                "poster_path": "/bdwrJZ0Ue9I3M8OsTP3FuFSbpB.jpg",
                "release_date": "2025-03-14",
                "title": "I Don't Like It Here",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/xiBr5BQmIjI8rAcMRAc6XkS4Wav.jpg",
                "genre_ids": [
                    10749,
                    53
                ],
                "id": 1216571,
                "original_language": "fr",
                "original_title": "June et John",
                "overview": "The story of John, a man who leads an ordinary life with a monotonous routine. His existence flows away dull, and he himself makes no effort to change anything; on the contrary, he does everything to continue being an ordinary man.  One day John runs into a woman on the subway who is as beautiful as she is mysterious named June. His encounter with her finally leads him to have a goal in his bumptious life: to love June to the end of his days and at any cost.",
                "popularity": 13.516,
                "poster_path": "/fuGPUHzYq4ssMPBM2Gn8X9QKqCr.jpg",
                "release_date": "2025-03-13",
                "title": "June and John",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    18,
                    53
                ],
                "id": 1421001,
                "original_language": "ru",
                "original_title": "Последний день рождения",
                "overview": "A large family gather to celebrate a birthday. It would seem like a great reason to get together. But the family is just a project of one of the \"brothers\" — an experienced psychologist who is conducting an experiment to create a \"happiness formula\". He believes that manipulating others, their emotions and desires, will make them happy. However, love interferes with the mathematical calculations, which can neither be calculated nor predicted.",
                "popularity": 13.465,
                "poster_path": "/zUjWFRvBJJkCezXzmIfj1dha34P.jpg",
                "release_date": "2025-03-13",
                "title": "The Last Birthday",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/qBwaMyVGjscDP1r0uAYkg88DDG6.jpg",
                "genre_ids": [
                    53,
                    18
                ],
                "id": 1437237,
                "original_language": "it",
                "original_title": "Gioco pericoloso",
                "overview": "Giada and Carlo are a couple with great complicity and intimacy, while each of them pursues their own career with determination.\r The young and ambitious Peter fascinates Carlo, who introduces him to the family. However, when Giada sees Peter, she has an unexpected reaction and tries in every way to remove him from their home: he could bring out some unspeakable secret from her past.\r And yet, the truth always finds a way to come out.",
                "popularity": 13.442,
                "poster_path": "/xQbyabXxKAS44yXb5BcNmInre5e.jpg",
                "release_date": "2025-03-13",
                "title": "Gioco pericoloso",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/kyFYCrZTQBoLCePqAppG1ao18BP.jpg",
                "genre_ids": [
                    878,
                    53
                ],
                "id": 1441567,
                "original_language": "en",
                "original_title": "Warden",
                "overview": "A docu-style science fiction thriller exploring the real-world impact of a young man discovering his superpowers. It delves into how his presence influences society, attracting followers, sparking conflict, and changing the lives of everyone around him.",
                "popularity": 22.316,
                "poster_path": "/fn5PCbsOJy25k2p7TJ7pbBSqnoM.jpg",
                "release_date": "2025-03-14",
                "title": "Warden",
                "video": false,
                "vote_average": 9,
                "vote_count": 1
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    53
                ],
                "id": 1433881,
                "original_language": "en",
                "original_title": "They Watch",
                "overview": "A young woman's reality unravels as she becomes convinced she's being stalked by unseen, mysterious forces.",
                "popularity": 22.34,
                "poster_path": null,
                "release_date": "2025-03-14",
                "title": "They Watch",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/gPqAbR8rvKL7tTcjmRojzChWzvR.jpg",
                "genre_ids": [
                    18,
                    53
                ],
                "id": 1428780,
                "original_language": "en",
                "original_title": "Last Resort",
                "overview": "Two men star in a never-ending television show, but one grows increasingly paranoid and desperate to reclaim his autonomy.",
                "popularity": 22.354,
                "poster_path": "/2eVlSCxXZlbZGD7XhBcPNCFGUli.jpg",
                "release_date": "2025-03-14",
                "title": "Last Resort",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/gwavBG1hohzAKB6Nb3Z0LgeDfzQ.jpg",
                "genre_ids": [
                    53
                ],
                "id": 1422471,
                "original_language": "ta",
                "original_title": "Dexter",
                "overview": "Aadi and Yamini's love story takes a tragic turn when Yamini is kidnapped and brutally murdered, plunging Aadi into despair. Struggling with PTSD, he undergoes a memory-erasing treatment and starts anew, reuniting with his childhood friend Bhuvi. However, their lives are upended when Bhuvi's family is taken hostage by a dangerous man named Sadhik. In a tense showdown, Sadhik traps Aadi, Bhuvi, and others in a deadly game, revealing the dark motives behind a string of murders, including Yamini's. Will Aadi uncover the truth and find redemption amidst the chaos?",
                "popularity": 22.373,
                "poster_path": "/6jLbZlzNOfHQgD0a1wgtBuscriZ.jpg",
                "release_date": "2025-03-14",
                "title": "Dexter",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/wrj9UtHdBHVBKP9nkecvaQtPj9W.jpg",
                "genre_ids": [
                    18,
                    9648,
                    53
                ],
                "id": 800367,
                "original_language": "en",
                "original_title": "The Actor",
                "overview": "Paul Cole finds himself stranded in a mysterious small town with no memory of who he is or how he got here. As bits and pieces of his past slowly emerge, he attempts to find his way home, but time is slippery, appearances can't be trusted, and it's unclear which of his identities is real.",
                "popularity": 22.708,
                "poster_path": "/jp397HSWa7e7lIkM19rvizHfTbL.jpg",
                "release_date": "2025-03-14",
                "title": "The Actor",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/sc1abgWNXc29wSBaerrjGBih06l.jpg",
                "genre_ids": [
                    27,
                    878,
                    53
                ],
                "id": 1084199,
                "original_language": "en",
                "original_title": "Companion",
                "overview": "During a weekend getaway at a secluded lakeside estate, a group of friends finds themselves entangled in a web of secrets, deception, and advanced technology. As tensions rise and loyalties are tested, they uncover unsettling truths about themselves and the world around them.",
                "popularity": 9.956,
                "poster_path": "/oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg",
                "release_date": "2025-01-22",
                "title": "Companion",
                "video": false,
                "vote_average": 7.05,
                "vote_count": 758
            },
            {
                "adult": false,
                "backdrop_path": "/kPyQ7WrHm6EoUGgou9jyX8WzHHK.jpg",
                "genre_ids": [
                    53,
                    18
                ],
                "id": 1442308,
                "original_language": "es",
                "original_title": "Urtajo",
                "overview": "",
                "popularity": 21.148,
                "poster_path": "/mxKrVRwLBkDeIXfWUWSmvtZY0Kp.jpg",
                "release_date": "2025-03-15",
                "title": "Urtajo",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/tMu0mt67XkCbTb6LbLFQdipox2l.jpg",
                "genre_ids": [
                    878,
                    9648,
                    53
                ],
                "id": 1420234,
                "original_language": "en",
                "original_title": "Reincarnation",
                "overview": "\"A man is confronted with a haunting reality as he uncovers dark secrets about his identity and the truth behind his mysterious circumstances.\"",
                "popularity": 21.127,
                "poster_path": "/4f0yXq68ukd5VBQGustyimX9ojz.jpg",
                "release_date": "2025-03-15",
                "title": "Reincarnation",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    18,
                    53
                ],
                "id": 1411411,
                "original_language": "en",
                "original_title": "A Day",
                "overview": "A young boxer must confront his family's traumatic past when his estranged older brother is released from prison.",
                "popularity": 21.118,
                "poster_path": "/cVY0jS7iRs1TQwSMQAfufKJh9sd.jpg",
                "release_date": "2025-03-15",
                "title": "A Day",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            },
            {
                "adult": false,
                "backdrop_path": "/9JwHIV82IQOhUTV8w1FlFQnKBZC.jpg",
                "genre_ids": [
                    53,
                    35
                ],
                "id": 1399893,
                "original_language": "en",
                "original_title": "Dead-Weight",
                "overview": "When three high school graduates supply booze for the big party, they discover their cargo isn't what they expected.",
                "popularity": 21.104,
                "poster_path": "/7FIlPqSh9i8uSmyrimpRj6rbWag.jpg",
                "release_date": "2025-03-15",
                "title": "Dead-Weight",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
            }
        ]},
    }
}

export const movieReducer = (state = initialState, action) => {
    return state;
}