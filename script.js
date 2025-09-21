 // URL de la imagen del reverso de las cartas
const CARD_BACK_IMAGE = "https://i.pinimg.com/736x/7b/bd/32/7bbd32bb2cdfd281bc0b47a45f94779a.jpg";

// Arcanos Mayores completos (22 cartas)
const MAJOR_ARCANA = [
    { id: 0, name: "El Loco", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/547283686_122119298774976958_6945129878280237965_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=nVuijFAG9FgQ7kNvwHj1dDo&_nc_oc=Adk3kKGaXAxcF8qfBZgcpR4xfRrMmmaME5Ji7P4VKK2dKD46_kWqRNN8pyrxpWd-D7Q&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=yqcxbO5AZ77MEvxPwH4zKA&oh=00_AfaN7B7upErew83lIAtqwl4uW81hZRP2m0lFz_DYJIHaPQ&oe=68D3A6CD" },
    { id: 1, name: "El Mago", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548729924_122119298768976958_2799435252202917317_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=NJ8vWCaNG24Q7kNvwGggl3u&_nc_oc=Adl5P0xtL7Z4RIUZ5vDu1_Re3426USrwax6VrWIxrDyMXbnm5AGdsG0I3CJ3YlQSKhA&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=ENfVUCIA3LNn_2ZW8M3bcg&oh=00_Afb2OesFMu1Yzy5FbMPRQMoKW6KT98ZA5_zqZ4gWbIIfwg&oe=68D38F96" },
    { id: 2, name: "La Sacerdotisa", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548743880_122119298762976958_2626695911397484806_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ggUN4hoJAiwQ7kNvwHtDYm_&_nc_oc=AdletnUkPSAzE5MKcjZn9fcXMeNiql5eI66gZiq5plRAjSqmO0iDuSSDQXfV4C2qwh4&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=V-09M9hgOOvSJjimYC55Sw&oh=00_AfZKWU2Os0nt0DfHJ5Y2OGg-G5bcWD5F8ry0sm6dcwroww&oe=68D3AB0F" },
    { id: 3, name: "La Emperatriz", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548972289_122119298870976958_4568982135133291467_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=zSDyCDAQnSMQ7kNvwHewVka&_nc_oc=AdnW2b8F162nQfd2xtZNB8HokyRTAK7pwKVipwFx1wBZFVc42Ava11BCddvHdrZWuK8&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=1a00wUiV3SNTEnxkDbSVDA&oh=00_Afb2qRnr8MIlSiAr6PBhr7IBwJ1vwH5FrK_26NXAbJP7XA&oe=68D394E9" },
    { id: 4, name: "El Emperador", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548268514_122119298918976958_1692589966413681241_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Afu4bZxvorsQ7kNvwHfohNo&_nc_oc=AdlwqopkNCHVB2MEwiW7LpfsHRz3bN_4dd6W_fMKFaukvbqOG3iXyFRl6qxhLUjYGUo&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=549xpYxq-0GAXthj-CNmMw&oh=00_Afa0STbqac4LNlpOEDfULfJtSIjZZW3gpu9RpjGnvh34FA&oe=68D39222" },
    { id: 5, name: "El Hierofante", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549632315_122119298936976958_8169134102249563105_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=tHbxmQqtnicQ7kNvwFJ8_l-&_nc_oc=AdlW9AL-MHztyndRRrav0SBJd8IVfjQjbaX2flXn8YC_TmDY2fYOjG-Isl0pNUcbpVU&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=toYaiZTQ0aYyPRP_ReRYCw&oh=00_AfZGvexXtwYPidSDggpJq0vRX_UNuR-WZjFb1MTux0eGLg&oe=68D39B4F" },
    { id: 6, name: "Los Enamorados", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549428970_122119299026976958_5856368252061708670_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ENryVMtcy2gQ7kNvwHomqLg&_nc_oc=AdmZro-FOGrZ77a9-6pqaZN_ohQrq83e-GzYc6c0CwiO4xlSfUyb86aY2oefV4_4x-4&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=fICQiGMQhqCaB3tPDv42oA&oh=00_AfZWCnu2nUttPA796mg39C8KCGtELxPfebj5SXaoz5zSZQ&oe=68D3AAD8" },
    { id: 7, name: "El Carro", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/548208077_122119299068976958_472798495462170267_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=7T_MDKslsjMQ7kNvwGZvkiK&_nc_oc=Adm79z0-OsCTian5QQSi3BtQ9yETsgFt1bonf-_NgCRN87aZ6dFEmcWOvEsgtAspWEU&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=2ss328DvEGiPkDGPhlSA0Q&oh=00_AfYMNZF1AvgzuLW83nc19zBNEsU3eUtVPG5OhNwc3J4nUQ&oe=68D397D2" },
    { id: 8, name: "La Justicia", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548647662_122119299110976958_7760552919969647232_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=-8__sIFblssQ7kNvwEMCQfx&_nc_oc=AdlI0k_pLNxwP-y12Y6uRZD2RlVcXR17ydP69Q9Vfr4gzAH5DId_vkkf31tbOqGOAgA&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=v_9tk93JWI4DgtUQNSx7ig&oh=00_AfbvuhPCGFaxZhcgLUudAbqunhTXjLuVAa12rPFCSU4-cQ&oe=68D39243" },
    { id: 9, name: "El Ermitaño", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/548218297_122119299176976958_1112744483784503219_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=TwfY37y_1EcQ7kNvwEkZwYT&_nc_oc=AdnHgUyt5jBFw7PXnTLvZz1yqxk2vlJFE_qZC6JaxNeJgkJEp_4gcbuseOqRnEXQlJ4&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=qm9fN_edI4Ey76l4ManJVw&oh=00_AfZDtUh30no8GmKuEZvptMRM8vySNXMtQ135Jzh0sZOadQ&oe=68D3A3D2" },
    { id: 10, name: "La Rueda de la Fortuna", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549579628_122119299242976958_11918633761196965_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=NNuxmj6lioMQ7kNvwH7g189&_nc_oc=AdknSL4qww1K3uZ04gUIu-1K8FPubniJm-5O0hHGC64HHpXF3tl4YyeEDbmG8Elj_6o&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=hM9lnhd8rVp8LouyzjVXYg&oh=00_AfY2csWrRtJZMU2PlW8vX5iNcGxrSf61tFl2sRqRBUwpCw&oe=68D3A23B" },
    { id: 11, name: "La Fuerza", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/549782992_122119299266976958_1098305203783611393_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=iP_4RkUXBmwQ7kNvwFXrfvK&_nc_oc=AdlYygkhPbr0g6dVQ6WlD9fPalnARmsBG1qKCC081VSEFWZK6Ebxxnj8zmbxvQycdm8&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=J6vVZTKSpVow4CYUWsIhqQ&oh=00_AfZskFVXZ9kduJ8nG_doLesdcAf2xrGpqa1_4cX8aflPHw&oe=68D3833F" },
    { id: 12, name: "El Colgado", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548520675_122119299326976958_2112825812771301659_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=-beLPrFdPN4Q7kNvwEOxFyd&_nc_oc=AdloWFv50tLQMPO5GS0CZzVcPaO4d8_E6W3O1DRHtc_BSPVgZ9BuEaD3k-PliRfPKmU&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=Y9N3kBEo6SY-iPeXLoRllA&oh=00_AfZIXHvv4I4lLkI_N0eGdATh1VdYagmpJXnU939XGlFwzA&oe=68D38204" },
    { id: 13, name: "La Muerte", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/550095931_122119299398976958_2108202460918284621_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=kxjDofO7f0AQ7kNvwFrEbQh&_nc_oc=AdlVcq6DDC5GAASlrNkgCdNgdSmbK-PPhghl_bKvOQEHbIZcvD5_OA6XPj9nkoFxVFg&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=rRKA5A8fuzMFFVrYwklLDA&oh=00_AfatXx7fNY5Ahet8ChwnyBJm3Oibrdu7woJSuQO5wQU6Ow&oe=68D39A42" },
    { id: 14, name: "La Templanza", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548948050_122119299434976958_2202410659026413229_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=DAVU3DhZlqYQ7kNvwFHgSj_&_nc_oc=AdlZ0vkeBvELALYQ-ZW70PBTXdfT6OlO6EYJS_Hpy4WO4WhIe8hJuISWwPkvud1TJfI&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=5LeBw-jvKiiIqPrp6XgtBQ&oh=00_AfaL8D_GDkL-LGY-bOPw-LDfsVfopbpkbed74F1FK01NcA&oe=68D394F0" },
    { id: 15, name: "El Diablo", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/548176879_122119299482976958_1638648437416235278_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ugBTW2u0rwwQ7kNvwFIlOcK&_nc_oc=AdmJeQxZvJEQ7iDPZ61O86ncIUUmNsKVytGV0K3rO3dvT_-J0SEY254aNsRlQM9Cogk&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=k-p9qWjaI8JfM4RYgQvlnQ&oh=00_Afa7xEfVFW-HkktA0IFV9AJPAMD1oed-W7kpYVGNfdzlTQ&oe=68D39D0E" },
    { id: 16, name: "La Torre", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549542196_122119299554976958_5253624486455557269_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Wmt9RaJXsGYQ7kNvwGdevKb&_nc_oc=AdkPnoij3LJ8Fzl3x-HPDEsGr_5EvYwmBXEECWeGa-nQIbZnJDJPY0J1krhjpIQ_QKY&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=AmfFuYsQd2ZEaVwaqS8Cww&oh=00_AfZcFTFOTrY-9NKhXeJETuo7ZC3XB3MMWlVFR3itn_Fr9A&oe=68D3B2AE" },
    { id: 17, name: "La Estrella", image: "https://scontent.fsla3-1.fna.fbcdn.net/v/t39.30808-6/549970151_122119301366976958_2117190330297635409_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=UlKaJIHqCk8Q7kNvwEYAuGf&_nc_oc=AdmTJIRHKbd_vJlMzugG6WwaQvJGhuY_eL6bTBBAg4zMOTWF2rKBmdDvYxT-40Abi0M&_nc_zt=23&_nc_ht=scontent.fsla3-1.fna&_nc_gid=k2WWBfRjQzMqj6GD9KmRWA&oh=00_AfZo4yYh1kfHVAccZdYoqzBV1JM3mnxfGiqI2ZZdCU2MhA&oe=68D3B773" },
    { id: 18, name: "La Luna", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548610255_122119301396976958_8368705850190163843_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=upFYBBCTWqgQ7kNvwGj3ALp&_nc_oc=AdkW5vU2FPje4k_b__pYYrmn0eDIdufrga6-G5j-9ctCpnYEKqPRiJ8QSi3Jk2vUTNc&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=KNZb5r6gQPMf2IIy1bKxEw&oh=00_AfYLr1lhMohn6jVoKiYyCxUZ_kxkIrdiRmNmSypHB7d-Mw&oe=68D39849" },
    { id: 19, name: "El Sol", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/548267904_122119301444976958_7526877399635760399_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=iuhgETkl-kAQ7kNvwFDT4bH&_nc_oc=AdkHdKoaThKkxkKhBch5C7dPdsr3vY5tmlZxikfqa5G6bJQXzcKQVlIa0K1v5f7FZ-U&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=pRBpZhhTjXFzPBFYSqJQ1A&oh=00_Afb1tdkSht0tybaGO599LAzviGxSa1HQvPDJ_AcHozuFGA&oe=68D3938F" },
    { id: 20, name: "El Juicio", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549032510_122119301492976958_74733388741903718_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=sW4gGiSbjzUQ7kNvwH6ym87&_nc_oc=AdlPyiXMELosRLo7fWwcDc8x8n6nQlbhUkDdCMfJUN2UQYDVpv4ivlqAW0FvHSQ3lU0&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=6d7cSXpdMMd7EV0KohOCZA&oh=00_AfYqEx7-rVZz6PTbo-40DVw3jmpcJFF1rJiI0wPTj2Xubg&oe=68D39D47" },
    { id: 21, name: "El Mundo", image: "https://scontent.fsla4-1.fna.fbcdn.net/v/t39.30808-6/549286620_122119301558976958_8136238780405164929_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=PeaaphWYaZgQ7kNvwE7hFdK&_nc_oc=AdnieLZrO_GNw0oHGm2iT7tKU1SEyY73eUvZEUVgxMEoYk2b4XXvVbPLcAlaq36Wzf8&_nc_zt=23&_nc_ht=scontent.fsla4-1.fna&_nc_gid=2vH6cfyWeFM17wYa5w3kNg&oh=00_Afbcjgk4nOdeLgaK3R5uUHQ2-9rjf-zcWtaMoJipFteP8w&oe=68D3A529" }
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
 



