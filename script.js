 // URL de la imagen del reverso de las cartas
const CARD_BACK_IMAGE = "https://i.pinimg.com/736x/7b/bd/32/7bbd32bb2cdfd281bc0b47a45f94779a.jpg";

// Arcanos Mayores completos (22 cartas)
const MAJOR_ARCANA = [
    { id: 0, name: "El Loco", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/547283686_122119298774976958_6945129878280237965_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGvxh-qI7qM_syEgd5ssaU7UMXBWoVm2d9QxcFahWbZ39Fh5KWm1d66hKkfN5AtZgc&_nc_ohc=KkHM6dHA5CcQ7kNvwG7H3BL&_nc_oc=Adl6BDE_P3ur7BCdM9vaN8g33BqoShpKthMGYyR4-Raw7dh3LX7O6QEO3jGHD2aQ23Q&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=5FGmH24B2JwgFmmqT46xaQ&oh=00_AfaIRgMzTfTALajiUhxsyG99xdcYKjbfzTmvmEf1MUDTfw&oe=68D6118D" },
    { id: 1, name: "El Mago", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548729924_122119298768976958_2799435252202917317_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE5hVHaySPBLTDZQl-gVkL22-LY85ZKgvjb4tjzlkqC-N5JvLwOOTbTSqfriAoPTY4&_nc_ohc=lZ_o0h2DduUQ7kNvwGfk9Dn&_nc_oc=AdkVgs6XfBE9kxTCT1Ge3vHQhA_3m0pWkXrDOfQvek7L-PLBXpZe50rQaLcqe0nLqyY&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=eMVWiIMEmk1AQIRn5wkY4A&oh=00_Afbbsq3gxTB14HeFAw1H0ROIZQxAoM_sBG7azlGuxE318g&oe=68D5FA56" },
    { id: 2, name: "La Sacerdotisa", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548743880_122119298762976958_2626695911397484806_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGCKGb9a-tZNXEXqiNXrgwP5ct79awXynbly3v1rBfKdhtZqPm1EhScJu_QlNqkiFI&_nc_ohc=8W51tCBxUl4Q7kNvwEsDu4O&_nc_oc=AdkYybuP2aZwl2ebWHjyO05IkgOHDeu3XflDAb_5kDzCWKEOFRQyOQH7ymCTtr04fuA&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=tZ_pcEtuFjnqTwPvZYvDUw&oh=00_AfYaVGwrqcu9TxSEDFAQDLNo1kvwUJaFPwGFr9-xaNZGrw&oe=68D615CF" },
    { id: 3, name: "La Emperatriz", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548972289_122119298870976958_4568982135133291467_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFWruqKR6TXJ4akwLb7r7P38cuvvmxIRfvxy6--bEhF-9RnVydOaxz-wIajE-MJmVA&_nc_ohc=zSDyCDAQnSMQ7kNvwHewVka&_nc_oc=AdnW2b8F162nQfd2xtZNB8HokyRTAK7pwKVipwFx1wBZFVc42Ava11BCddvHdrZWuK8&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=PS9SpTZzduCdJ_u6QjKDhA&oh=00_AfZYgUrAkNJDy3-Gk-sSNXEHExOpbSzSNbTS8WtdalfkbQ&oe=68D5FFA9" },
    { id: 4, name: "El Emperador", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548268514_122119298918976958_1692589966413681241_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFAWG_GzoeM9yo7iu7RTrB_u5j9vzdQXga7mP2_N1BeBlf31Pt7scpbnzxkxQ0OmMc&_nc_ohc=OQrrA4fwZl4Q7kNvwEIKpgf&_nc_oc=Adm8S_IewHeBsy2ycCvohIfMyP151lQl8Y73NtYBhvsZeN6dch_xOyL12jQGVpNjm7U&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=y-w1Jg5PDBhTTgqTVvcYFQ&oh=00_AfYkmoCh7yv4ZCZ0uXgIUr-MnqrEFR8i1tjRPTPUX-QfhA&oe=68D63522" },
    { id: 5, name: "El Hierofante", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549632315_122119298936976958_8169134102249563105_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGDOu6QvQkomcT6G0pRUVC_slVrRfeZmNmyVWtF95mY2ckgbd6Gdk6px_eG52u6e2Q&_nc_ohc=tHbxmQqtnicQ7kNvwFJ8_l-&_nc_oc=AdlW9AL-MHztyndRRrav0SBJd8IVfjQjbaX2flXn8YC_TmDY2fYOjG-Isl0pNUcbpVU&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=VqfTKwWJLGQp0Z1UfXbEKQ&oh=00_AfYGnyXRgYLs-u1RHkBk8gC1KEzJGT38KQbSnUSuvZOPRw&oe=68D6060F" },
    { id: 6, name: "Los Enamorados", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549428970_122119299026976958_5856368252061708670_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGvojlmG3qrxIH-40oN5_5Cg4lPxf3P8hSDiU_F_c_yFH6tukORq2JULaiaXcMm2jc&_nc_ohc=B4TkyhmcCekQ7kNvwFgHpGl&_nc_oc=AdmA5YQFJ43FJ9-euXm0xNLWufPFgLc5oyrmskMSONLGyXh_oOvT3g_MKhl5QH7eVp8&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=KJJtNGqjkPL-BNk2UA8Peg&oh=00_AfaVK_i6mBBjd3woFYKRO9NcYJcRsVhmY-BUDx3p7rIEvA&oe=68D61598" },
    { id: 7, name: "El Carro", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/548208077_122119299068976958_472798495462170267_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFWgiHznENQ4JLNXgVIfy7k95v7Pd0Sb1P3m_s93RJvU8qYoGiiFQI6mQoXdQ3m5Rk&_nc_ohc=g_xg8VedNHEQ7kNvwElA6Xu&_nc_oc=AdmN_8eXmCyyiDplmlTL4SJH87J8eri2nWxKDlJaBnE1EMgQUfAnT16wRJDgkNvBLQE&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=cXRjHuEGbf1pVSphdKxYWw&oh=00_Afbt8GpdUg71O4Bvf4_XHnxzpvZdzcD3G8fcfDw7iRf4Eg&oe=68D60292" },
    { id: 8, name: "La Justicia", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/551653322_122120267006976958_1050440055294021222_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWz9MuL3qZDqeORPgCWi8X4Vvt4j8mmuLhW-3iPyaa4ulr7zsrLCGtGZLUa_UKN0E&_nc_ohc=NL1nV_I0yMwQ7kNvwHcl7tz&_nc_oc=AdmOtMVXOjq6_yEkYP8PvKDwOd1_2EuJ2csmkYXvjndXyVP4cTN0H3d9iz0gpGZL4Js&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=oFfHVjlqo0MlS0JTCytj7A&oh=00_AfaLjzMwRDSbGoyYCOJ3SS0EnAv_9SoFGs8VwemEKLVTHg&oe=68D61CCE" },
    { id: 9, name: "El Ermitaño", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/548218297_122119299176976958_1112744483784503219_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGAJF47ZgrY6swNM0yYUgwu1HpPZOm0Pm_Uek9k6bQ-b7a6HrtZ11UKhsrrFUKLzXE&_nc_ohc=4XNN7mL_YKMQ7kNvwF7CbbK&_nc_oc=AdkKv7Yz0Z6UiTX8YXR6_eKsJs5kLHQouKEXMoDqdp_jIZLmBzaKORymVQdmsV4arAk&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=YXG97z48iN5EUl1B2x9Fqw&oh=00_AfZK1APLknoOqdXMu9AoMYCCilZ-blmorTvTk0lTr1nTZg&oe=68D60E92" },
    { id: 10, name: "La Rueda de la Fortuna", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549579628_122119299242976958_11918633761196965_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFfbRhSbfWIuVtnR-Shv3Omk2qMC2fZshSTaowLZ9myFGaQRStiXLNlslybUg2Lrjk&_nc_ohc=l_oH488z7oQQ7kNvwEYWqXq&_nc_oc=AdnYLBfckzi2zQ5ltL-SrAv-V08C6r2BZz8DkCqdifDXbu2MJO8yrls58RmyJcl6Kk0&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=LahBWgmB92l7vOp9BpyTeg&oh=00_AfaOrF3GvK6Se4XGS7WxdfImT-DBv3hBOky0LxHguGHi7Q&oe=68D60CFB" },
    { id: 11, name: "La Fuerza", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/549782992_122119299266976958_1098305203783611393_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHA4TDmZs0lfSPVRk3HJN5lh2AVEC-v-a6HYBUQL6_5rtRw0TzexKz-UarQbly4ugU&_nc_ohc=10oo-vRFuSAQ7kNvwFJhsyz&_nc_oc=AdkfaJNEkULRPLtrnTI65aA75MOQWEBeupv5h2248AeRcnssSHkJhaUVR1bW3B0ujGo&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=1GvvtUTjGSmcfTfdh2E_wg&oh=00_AfbR62d9XyVvdFvfwoahH0vbfdxuHnxoWEPIrbg1y43uxw&oe=68D6263F" },
    { id: 12, name: "El Colgado", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548520675_122119299326976958_2112825812771301659_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGkMCNqtwZSZ88n0FoYXtKS-JwJilU0drD4nAmKVTR2sNtrtErXD8Kpd8zJapHgHGU&_nc_ohc=-beLPrFdPN4Q7kNvwEOxFyd&_nc_oc=AdloWFv50tLQMPO5GS0CZzVcPaO4d8_E6W3O1DRHtc_BSPVgZ9BuEaD3k-PliRfPKmU&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=izqu7Pxw6v-IrpUuJsWwlQ&oh=00_AfbFEGVHObSPFO8s1m5hWJTutaWIR-L0H_-kd-j3acggNw&oe=68D62504" },
    { id: 13, name: "La Muerte", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/550095931_122119299398976958_2108202460918284621_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGxIBf__juLTsNPZN7pFwSG1uYBgMXOwnnW5gGAxc7CecbqEn7QjiVHmkQrVQIpv-s&_nc_ohc=ku3KhpsaLVoQ7kNvwHXqhn1&_nc_oc=AdnB5x0tk5HaskSii812-bG3BzkHf1KemwLNVUgmMgUv646kwfulZbM6wmUBUvCUObQ&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=pJeZ6rDFgbUCMlicQvsJVg&oh=00_AfZwh01Nz6IQL4K-jLUfotkwB13T3L230vQQ5Fv_8c-XMA&oe=68D60502" },
    { id: 14, name: "La Templanza", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548948050_122119299434976958_2202410659026413229_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE5PRyzUiCjMblsVa4gk_xnq7gdTAYGuD2ruB1MBga4PRyPSC1zwatgpK0ripC-K_g&_nc_ohc=ovMxuGKIqA8Q7kNvwH8faKT&_nc_oc=AdlecbLvtPLNhmAQRTtoT7Sd0pqlF6PKUeYSm2J53k4pzlon6zCbOsp2zfoAQE1Mzvk&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=ekSv1Gjv92LKrZQcJYc-lA&oh=00_AfaqRbc14PJuUL7rB5FUBB9CloVcRs08yAHT8V4TwaE61w&oe=68D637F0" },
    { id: 15, name: "El Diablo", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/548176879_122119299482976958_1638648437416235278_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFLU891ljeJuzn5_8gNjyUkahFpEEYwsUpqEWkQRjCxSuU79xRFAA9ANX-Svgr2yd8&_nc_ohc=N1SqW_aiI0IQ7kNvwHdADnM&_nc_oc=Adkikry-iyrGdNdMJlKlhV-qKQIuPccZCbtiQI2CuqKeFFHPA0sA-vlqyX2zoAl8Xzs&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=-wpTT0rDDM2P0MDivOqdZg&oh=00_AfYELACGvs8r-oasc9LhurzHG7Jbaj8goOX3wOOIhX34SA&oe=68D607CE"},
    { id: 16, name: "La Torre", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549542196_122119299554976958_5253624486455557269_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF03YC-57CTxcErb1c4V_1f4RFOH4qrdMPhEU4fiqt0w4TZDoNhn3K7n2Hh6wrC-Us&_nc_ohc=_JbByBHkm_MQ7kNvwEpoS6y&_nc_oc=Adm5TdTChdT8jidYr0JlwRcW0FLdK3o7cq7WOBfQlExr_79XsChX_16hhQdwSEFbr0U&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=EPdVf5XOBA4hZyp5BVbYsg&oh=00_AfbOSBBBInhZa_uKDM_QNjxnGqzOYnxTRtZWvLK4I_82lw&oe=68D61D6E"},
    { id: 17, name: "La Estrella", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/549970151_122119301366976958_2117190330297635409_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFBpc8wCLMvGfz7xp0b4FkVuK08IZ6f88C4rTwhnp_zwL8QKniKxwS_pvg8DSK4r1A&_nc_ohc=TFtWmxJvTHkQ7kNvwHlrOoX&_nc_oc=AdkzQfCPgEvL13pOaTUG_Omc_Q4cX3H2vsSaM4IrxSs8tVGhwf9jdlBaS34ZRJ5sAn8&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=8oyYqdN-D2cGHdqp5fS2Fg&oh=00_Afa24CL4p1aTPqw0S0-MUCPrPCgWN8EeLwatZLAk_UqDiw&oe=68D62233" },
    { id: 18, name: "La Luna", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548610255_122119301396976958_8368705850190163843_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE4xceuUtnVpvZiswy6rvK1P6LYeyDFOqM_oth7IMU6o4-lzRA_6dRbXBk-PD6opo0&_nc_ohc=upFYBBCTWqgQ7kNvwGj3ALp&_nc_oc=AdkW5vU2FPje4k_b__pYYrmn0eDIdufrga6-G5j-9ctCpnYEKqPRiJ8QSi3Jk2vUTNc&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=Vb_goFziIHo_UUiPO5RN9w&oh=00_Afa07GlPxXx_GmkVzHJ4vaCXhO8pDxFI3czWN6OVFWxMKA&oe=68D63B49" },
    { id: 19, name: "El Sol", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548267904_122119301444976958_7526877399635760399_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGEEVvxD0aSKIb3-g7WKMkVb9ZwFroszF1v1nAWuizMXQQ8-vlvSIxeTiruD6OM9iU&_nc_ohc=4eRxmMepKXoQ7kNvwEEN_jo&_nc_oc=AdnSnIsUGlincvCCg9Pi02TEb_BlIkVsLj5Sf4jKpaTowpD6QutNOF1vZ9-1cZbmg6E&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=jiz3dSl2PNB2Z_dmBoIfdQ&oh=00_AfZA8LNu5gqrLkhkT_HiA6YH6WFH0tURVKQI4arw_0ZdGw&oe=68D6368F" },
    { id: 20, name: "El Juicio", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549032510_122119301492976958_74733388741903718_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEb-4BP9rXjYRtym_C3pc1SYzSX2IFGArNjNJfYgUYCs7RxMwaUO2opirLNpZ1cEfE&_nc_ohc=sW4gGiSbjzUQ7kNvwH6ym87&_nc_oc=AdlPyiXMELosRLo7fWwcDc8x8n6nQlbhUkDdCMfJUN2UQYDVpv4ivlqAW0FvHSQ3lU0&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=tAO3nlLU4F3by19khWyk6A&oh=00_AfYi4m6uKRtuxtVp8tjF096r9LdH4X3m4lIHocoV0QOAAw&oe=68D60807" },
    { id: 21, name: "El Mundo", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549286620_122119301558976958_8136238780405164929_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEXfUCn7CCLRHhYn0SzftRlgnHImmlH4teCcciaaUfi10VWuuMfheEt5p2mdVbdbMo&_nc_ohc=4QiC26CT808Q7kNvwGCL_M4&_nc_oc=Adlxz7uZZiXRcbRcfkPnn8WPX2I7bUTOaa-UhhUV8SK5TtAlxs_z8ofxgX95lsJgcJU&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=zieDR16L6NorfwSgV4E6Lw&oh=00_AfZu4C_JoyQURipNsBBP10GFIIOEmyGUXpD775W2CeZv5w&oe=68D60FE9" }
];

        // Slogans rotativos
        const slogans = [
            "Sabiduría ancestral, voz del presente.",
            "Tu camino, iluminado por el Tarot.",
            "El Tarot no predice… revela.",
            "Donde las cartas se convierten en guía."
        ];

        // Base de datos de cartas con significados completos
        const tarotDeck = [
            { name: "El Loco", meaning: "Nuevos comienzos, espontaneidad, fe en el futuro. Representa la aventura y la confianza en lo desconocido. Es momento de dar un salto de fe hacia nuevas experiencias." },
            { name: "El Mago", meaning: "Poder personal, creatividad, manifestación. Tienes todas las herramientas necesarias para el éxito. Tu voluntad y habilidades pueden materializar tus deseos." },
            { name: "La Suma Sacerdotisa", meaning: "Intuición, sabiduría oculta, misterios. Confía en tu voz interior y tu sabiduría instintiva. Los secretos se revelarán a través de la meditación." },
            { name: "La Emperatriz", meaning: "Fertilidad, creatividad, abundancia. Un período de crecimiento y manifestación creativa te espera. La naturaleza y la feminidad sagrada te guían." },
            { name: "El Emperador", meaning: "Autoridad, estructura, control. Es momento de tomar las riendas y establecer orden en tu vida. El liderazgo y la disciplina son clave." },
            { name: "El Hierofante", meaning: "Tradición, enseñanza espiritual, conformidad. Busca sabiduría en las enseñanzas establecidas. Un mentor espiritual puede aparecer." },
            { name: "Los Enamorados", meaning: "Amor, armonía, elecciones importantes. Una decisión significativa sobre relaciones se aproxima. El equilibrio entre opuestos es esencial." },
            { name: "El Carro", meaning: "Victoria, determinación, control. Tu fuerza de voluntad te llevará al triunfo. Mantén el equilibrio mientras avanzas hacia tus metas." },
            { name: "La Fuerza", meaning: "Coraje interno, compasión, control suave. Tu fuerza interior superará cualquier obstáculo. La gentileza es más poderosa que la fuerza bruta." },
            { name: "El Ermitaño", meaning: "Búsqueda interior, guía espiritual, soledad reflexiva. Es momento de mirar hacia adentro. La sabiduría viene de la introspección." },
            { name: "La Rueda de la Fortuna", meaning: "Cambios, ciclos, destino. Los vientos del cambio soplan a tu favor. Lo que sube baja, y lo que baja sube." },
            { name: "La Justicia", meaning: "Equilibrio, verdad, causa y efecto. La justicia prevalecerá en tu situación. Las decisiones justas traen consecuencias positivas." },
            { name: "El Colgado", meaning: "Sacrificio, nueva perspectiva, liberación. A veces hay que soltar para poder avanzar. Un cambio de perspectiva revelará la verdad." },
            { name: "La Muerte", meaning: "Transformación, final de ciclos, renacimiento. Un final necesario para un nuevo comienzo. La transformación profunda está en marcha." },
            { name: "La Templanza", meaning: "Equilibrio, moderación, paciencia. La armonía se logra con paciencia y equilibrio. La mezcla perfecta de elementos opuestos." },
            { name: "El Diablo", meaning: "Tentación, ataduras, materialismo. Examina qué te está limitando realmente. Las cadenas que te atan pueden ser ilusiones." },
            { name: "La Torre", meaning: "Cambio súbito, revelación, liberación. Aunque parezca destructivo, este cambio es necesario. Las estructuras falsas deben caer." },
            { name: "La Estrella", meaning: "Esperanza, inspiración, guía espiritual. Tras la tormenta, llega la calma y la esperanza. Tus deseos se están alineando con el universo." },
            { name: "La Luna", meaning: "Ilusión, intuición, miedos ocultos. No todo es lo que parece, confía en tu intuición. Los misterios se revelan bajo la luz lunar." },
            { name: "El Sol", meaning: "Alegría, éxito, vitalidad. Un período de gran felicidad y realizaciones se aproxima. La claridad y el optimismo iluminan tu camino." },
            { name: "El Juicio", meaning: "Renacimiento, llamada superior, perdón. Es hora de juzgar el pasado y renacer. Una llamada espiritual superior te despierta." },
            { name: "El Mundo", meaning: "Realización, cumplimiento, totalidad. Has completado un ciclo importante en tu vida. El éxito y la plenitud están a tu alcance." }
        ];

        // Interpretaciones místicas para las tiradas de 3 cartas
        const interpretations = [
            "Las cartas han hablado y revelan un camino de transformación. El pasado te ha preparado para este momento, el presente te ofrece las herramientas necesarias, y el futuro brilla con promesas de realización. Confía en tu intuición y abraza los cambios que se aproximan.",
            "Los arcanos revelan una historia de crecimiento personal. Lo que una vez pareció un obstáculo ahora se convierte en tu mayor fortaleza. El universo conspira a tu favor, alineando las energías para manifestar tus deseos más profundos.",
            "Esta tirada muestra un período de equilibrio y armonía acercándose. Las lecciones del pasado se integran con la sabiduría del presente, creando una base sólida para decisiones futuras. Tu alma está lista para el próximo nivel de evolución.",
            "Las cartas susurran secretos de abundancia y realización. Un ciclo se cierra mientras otro comienza, trayendo consigo oportunidades doradas. Mantén el corazón abierto y la mente clara, pues grandes cambios positivos se avecinan.",
            "Los símbolos sagrados revelan un momento de despertar espiritual. Las sincronicidades aumentarán en tu vida, guiándote hacia tu propósito superior. Confía en las señales del universo y permite que la magia fluya a través de ti.",
            "Esta combinación de cartas habla de sanación profunda y renovación. Viejas heridas encuentran su medicina, y nuevas posibilidades emergen como flores después de la lluvia. Tu fuerza interior es más poderosa de lo que imaginas."
        ];

        let currentSlogan = 0;
        let cardsRevealed = false;
        let selectedCards = [];

        // Inicialización después de cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                createSparkles();
                showSlogans();
                createStars();
            }, 4500);
        });

        // Crear partículas brillantes
        function createSparkles() {
            const sparklesContainer = document.getElementById('sparkles');
            
            setInterval(() => {
                if (sparklesContainer.children.length < 30) {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'sparkle';
                    sparkle.style.left = Math.random() * 100 + '%';
                    sparkle.style.animationDelay = Math.random() * 2 + 's';
                    sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
                    sparklesContainer.appendChild(sparkle);
                    
                    setTimeout(() => {
                        if (sparkle.parentNode) {
                            sparkle.remove();
                        }
                    }, 5000);
                }
            }, 300);
        }

        // Animación de texto letra por letra
        function animateText(text, element) {
            element.innerHTML = '';
            const letters = text.split('');
            
            letters.forEach((letter, index) => {
                const span = document.createElement('span');
                span.className = 'letter';
                span.textContent = letter === ' ' ? '\u00A0' : letter;
                span.style.animationDelay = index * 0.08 + 's';
                element.appendChild(span);
            });
        }

        // Mostrar slogans rotativos
        function showSlogans() {
            const sloganElement = document.getElementById('slogan');
            
            function showNextSlogan() {
                sloganElement.style.opacity = '0';
                
                setTimeout(() => {
                    animateText(slogans[currentSlogan], sloganElement);
                    sloganElement.style.opacity = '1';
                    currentSlogan = (currentSlogan + 1) % slogans.length;
                }, 600);
            }
            
            showNextSlogan();
            setInterval(showNextSlogan, 5000);
        }

        // Función principal para revelar cartas
        function revealCards() {
            if (cardsRevealed) {
                resetCards();
                return;
            }
            
            const button = document.querySelector('.reveal-button');
            button.disabled = true;
            button.textContent = '🔮 Consultando los Arcanos... 🔮';
            
            cardsRevealed = true;
            selectedCards = getRandomCards(3);
            
            setTimeout(() => {
                for (let i = 1; i <= 3; i++) {
                    const card = document.getElementById(`card${i}`);
                    const cardData = selectedCards[i - 1];
                    
                    document.getElementById(`cardName${i}`).textContent = cardData.name;
                    document.getElementById(`cardMeaning${i}`).textContent = cardData.meaning;
                    
                    setTimeout(() => {
                        card.classList.add('flipped');
                        
                        card.style.filter = 'brightness(1.3)';
                        setTimeout(() => {
                            card.style.filter = 'brightness(1)';
                        }, 300);
                        
                    }, i * 400);
                }
                
                setTimeout(() => {
                    showInterpretation(selectedCards);
                    
                    button.disabled = false;
                    button.textContent = '🔮 Nueva Consulta 🔮';
                }, 1500);
                
            }, 800);
        }

        // Resetear cartas para nueva consulta
        function resetCards() {
            cardsRevealed = false;
            const button = document.querySelector('.reveal-button');
            button.textContent = '🔮 Descubre tu Augur 🔮';
            
            const interpretation = document.getElementById('interpretation');
            interpretation.classList.remove('show');
            
            for (let i = 1; i <= 3; i++) {
                const card = document.getElementById(`card${i}`);
                card.classList.remove('flipped');
            }
        }

        // Obtener cartas aleatorias sin repetición
        function getRandomCards(count) {
            const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }

        // Mostrar interpretación personalizada
        function showInterpretation(cards) {
            const interpretation = document.getElementById('interpretation');
            const interpretationText = document.getElementById('interpretationText');
            
            const randomInterpretation = interpretations[Math.floor(Math.random() * interpretations.length)];
            
            const cardNames = cards.map(card => card.name).join(', ');
            const personalizedText = `
                <div style="margin-bottom: 20px;">
                    <strong>Tus cartas reveladas:</strong> ${cardNames}
                </div>
                <div style="line-height: 1.7; text-align: justify;">
                    ${randomInterpretation}
                </div>
                <div style="margin-top: 25px; padding: 20px; background: rgba(201,169,221,0.1); border-radius: 15px; border-left: 4px solid #a688b5;">
                    <strong>Consejo de los Arcanos:</strong> Las cartas que han aparecido en tu camino no son casualidad. 
                    Cada símbolo, cada mensaje, resuena con las vibraciones de tu alma en este momento. 
                    Medita sobre estas revelaciones y permite que su sabiduría guíe tus próximos pasos.
                </div>
            `;
            
            interpretationText.innerHTML = personalizedText;
            
            setTimeout(() => {
                interpretation.classList.add('show');
            }, 200);
        }

        // Crear estrellas en el footer
        function createStars() {
            const starContainer = document.getElementById('starryBackground');
            const starCount = 30;

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 70 + '%';
                
                const size = Math.random() * 3 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                
                star.style.animationDelay = Math.random() * 3 + 's';
                
                starContainer.appendChild(star);
            }
        }
        // Crear pasto en el footer
function createGrass() {
    const grassContainer = document.getElementById('grassContainer');
    const grassCount = 30;

    for (let i = 0; i < grassCount; i++) {
        const blade = document.createElement('div');
        blade.className = 'grass-blade';

        blade.style.left = Math.random() * 100 + '%';

        const height = Math.random() * 20 + 10;
        blade.style.height = height + 'px';

        blade.style.animationDelay = (Math.random() * 2 + 1.5) + 's';

        grassContainer.appendChild(blade);
    }
}

// Efectos de hover en las cartas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.tarot-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('flipped')) {
                this.style.transform = 'translateY(-15px) rotateY(5deg) scale(1.05)';
                this.style.boxShadow = '0 20px 50px rgba(201,169,221,0.4)';
            }
        });

        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('flipped')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
});

// Efectos de partículas en el botón
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.reveal-button');

    button.addEventListener('mouseenter', function() {
        for (let i = 0; i < 6; i++) {
            setTimeout(()=> {
                const particle = document
            .createAttribute('div');
                particle.className = 'button-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                button.appendChild(particle);

                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }, i * 100); 
        }
    });
});
 




