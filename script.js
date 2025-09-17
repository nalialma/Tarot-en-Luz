// URL de la imagen del reverso de las cartas
const CARD_BACK_IMAGE = "https://i.pinimg.com/736x/7b/bd/32/7bbd32bb2cdfd281bc0b47a45f94779a.jpg";

// Arcanos Mayores completos (22 cartas)
const MAJOR_ARCANA = [
    { id: 0, name: "El Loco", image: "images/major/00-el-loco.jpeg" },
    { id: 1, name: "El Mago", image: "images/major/01-el-mago.jpeg" },
    { id: 2, name: "La Sacerdotisa", image: "images/major/02-la-sacerdotisa.jpeg" },
    { id: 3, name: "La Emperatriz", image: "images/major/03-la-emperatriz.jpeg" },
    { id: 4, name: "El Emperador", image: "images/major/04-el-emperador.jpeg" },
    { id: 5, name: "El Hierofante", image: "images/major/05-el-hierofante.jpeg" },
    { id: 6, name: "Los Enamorados", image: "images/major/06-los-enamorados.jpeg" },
    { id: 7, name: "El Carro", image: "images/major/07-el-carro.jpeg" },
    { id: 8, name: "La Justicia", image: "images/major/08-la-justicia.jpeg" },
    { id: 9, name: "El Ermitaño", image: "images/major/09-el-ermitano.jpeg" },
    { id: 10, name: "La Rueda de la Fortuna", image: "images/major/10-la-rueda.jpeg" },
    { id: 11, name: "La Fuerza", image: "images/major/11-la-fuerza.jpeg" },
    { id: 12, name: "El Colgado", image: "images/major/12-el-colgado.jpeg" },
    { id: 13, name: "La Muerte", image: "images/major/13-la-muerte.jpeg" },
    { id: 14, name: "La Templanza", image: "images/major/14-la-templanza.jpeg" },
    { id: 15, name: "El Diablo", image: "images/major/15-el-diablo.jpeg" },
    { id: 16, name: "La Torre", image: "images/major/16-la-torre.jpeg" },
    { id: 17, name: "La Estrella", image: "images/major/17-la-estrella.jpeg" },
    { id: 18, name: "La Luna", image: "images/major/18-la-luna.jpeg" },
    { id: 19, name: "El Sol", image: "images/major/19-el-sol.jpeg" },
    { id: 20, name: "El Juicio", image: "images/major/20-el-juicio.jpeg" },
    { id: 21, name: "El Mundo", image: "images/major/21-el-mundo.jpeg" }
];

// Arcanos Menores completos (56 cartas) - 4 palos de 14 cartas cada uno
const MINOR_ARCANA = {
    // COPAS (14 cartas)
    cups: [
        { id: "cup-1", name: "As de Copas", image: "images/minor/cups/01-as-copas.jpg" },
        { id: "cup-2", name: "Dos de Copas", image: "images/minor/cups/02-dos-copas.jpg" },
        { id: "cup-3", name: "Tres de Copas", image: "images/minor/cups/03-tres-copas.jpg" },
        { id: "cup-4", name: "Cuatro de Copas", image: "images/minor/cups/04-cuatro-copas.jpg" },
        { id: "cup-5", name: "Cinco de Copas", image: "images/minor/cups/05-cinco-copas.jpg" },
        { id: "cup-6", name: "Seis de Copas", image: "images/minor/cups/06-seis-copas.jpg" },
        { id: "cup-7", name: "Siete de Copas", image: "images/minor/cups/07-siete-copas.jpg" },
        { id: "cup-8", name: "Ocho de Copas", image: "images/minor/cups/08-ocho-copas.jpg" },
        { id: "cup-9", name: "Nueve de Copas", image: "images/minor/cups/09-nueve-copas.jpg" },
        { id: "cup-10", name: "Diez de Copas", image: "images/minor/cups/10-diez-copas.jpg" },
        { id: "cup-j", name: "Sota de Copas", image: "images/minor/cups/11-sota-copas.jpg" },
        { id: "cup-q", name: "Reina de Copas", image: "images/minor/cups/12-reina-copas.jpg" },
        { id: "cup-k", name: "Rey de Copas", image: "images/minor/cups/13-rey-copas.jpg" },
        { id: "cup-kn", name: "Caballero de Copas", image: "images/minor/cups/14-caballero-copas.jpg" }
    ],
    
    // ESPADAS (14 cartas)
    swords: [
        { id: "sword-1", name: "As de Espadas", image: "images/minor/swords/01-as-espadas.jpg" },
        { id: "sword-2", name: "Dos de Espadas", image: "images/minor/swords/02-dos-espadas.jpg" },
        { id: "sword-3", name: "Tres de Espadas", image: "images/minor/swords/03-tres-espadas.jpg" },
        { id: "sword-4", name: "Cuatro de Espadas", image: "images/minor/swords/04-cuatro-espadas.jpg" },
        { id: "sword-5", name: "Cinco de Espadas", image: "images/minor/swords/05-cinco-espadas.jpg" },
        { id: "sword-6", name: "Seis de Espadas", image: "images/minor/swords/06-seis-espadas.jpg" },
        { id: "sword-7", name: "Siete de Espadas", image: "images/minor/swords/07-siete-espadas.jpg" },
        { id: "sword-8", name: "Ocho de Espadas", image: "images/minor/swords/08-ocho-espadas.jpg" },
        { id: "sword-9", name: "Nueve de Espadas", image: "images/minor/swords/09-nueve-espadas.jpg" },
        { id: "sword-10", name: "Diez de Espadas", image: "images/minor/swords/10-diez-espadas.jpg" },
        { id: "sword-j", name: "Sota de Espadas", image: "images/minor/swords/11-sota-espadas.jpg" },
        { id: "sword-q", name: "Reina de Espadas", image: "images/minor/swords/12-reina-espadas.jpg" },
        { id: "sword-k", name: "Rey de Espadas", image: "images/minor/swords/13-rey-espadas.jpg" },
        { id: "sword-kn", name: "Caballero de Espadas", image: "images/minor/swords/14-caballero-espadas.jpg" }
    ],
    
    // BASTOS/VARAS (14 cartas)
    wands: [
        { id: "wand-1", name: "As de Bastos", image: "images/minor/wands/01-as-bastos.jpg" },
        { id: "wand-2", name: "Dos de Bastos", image: "images/minor/wands/02-dos-bastos.jpg" },
        { id: "wand-3", name: "Tres de Bastos", image: "images/minor/wands/03-tres-bastos.jpg" },
        { id: "wand-4", name: "Cuatro de Bastos", image: "images/minor/wands/04-cuatro-bastos.jpg" },
        { id: "wand-5", name: "Cinco de Bastos", image: "images/minor/wands/05-cinco-bastos.jpg" },
        { id: "wand-6", name: "Seis de Bastos", image: "images/minor/wands/06-seis-bastos.jpg" },
        { id: "wand-7", name: "Siete de Bastos", image: "images/minor/wands/07-siete-bastos.jpg" },
        { id: "wand-8", name: "Ocho de Bastos", image: "images/minor/wands/08-ocho-bastos.jpg" },
        { id: "wand-9", name: "Nueve de Bastos", image: "images/minor/wands/09-nueve-bastos.jpg" },
        { id: "wand-10", name: "Diez de Bastos", image: "images/minor/wands/10-diez-bastos.jpg" },
        { id: "wand-j", name: "Sota de Bastos", image: "images/minor/wands/11-sota-bastos.jpg" },
        { id: "wand-q", name: "Reina de Bastos", image: "images/minor/wands/12-reina-bastos.jpg" },
        { id: "wand-k", name: "Rey de Bastos", image: "images/minor/wands/13-rey-bastos.jpg" },
        { id: "wand-kn", name: "Caballero de Bastos", image: "images/minor/wands/14-caballero-bastos.jpg" }
    ],
    
    // OROS/PENTÁCULOS (14 cartas)
    pentacles: [
        { id: "pent-1", name: "As de Oros", image: "images/minor/pentacles/01-as-oros.jpg" },
        { id: "pent-2", name: "Dos de Oros", image: "images/minor/pentacles/02-dos-oros.jpg" },
        { id: "pent-3", name: "Tres de Oros", image: "images/minor/pentacles/03-tres-oros.jpg" },
        { id: "pent-4", name: "Cuatro de Oros", image: "images/minor/pentacles/04-cuatro-oros.jpg" },
        { id: "pent-5", name: "Cinco de Oros", image: "images/minor/pentacles/05-cinco-oros.jpg" },
        { id: "pent-6", name: "Seis de Oros", image: "images/minor/pentacles/06-seis-oros.jpg" },
        { id: "pent-7", name: "Siete de Oros", image: "images/minor/pentacles/07-siete-oros.jpg" },
        { id: "pent-8", name: "Ocho de Oros", image: "images/minor/pentacles/08-ocho-oros.jpg" },
        { id: "pent-9", name: "Nueve de Oros", image: "images/minor/pentacles/09-nueve-oros.jpg" },
        { id: "pent-10", name: "Diez de Oros", image: "images/minor/pentacles/10-diez-oros.jpg" },
        { id: "pent-j", name: "Sota de Oros", image: "images/minor/pentacles/11-sota-oros.jpg" },
        { id: "pent-q", name: "Reina de Oros", image: "images/minor/pentacles/12-reina-oros.jpg" },
        { id: "pent-k", name: "Rey de Oros", image: "images/minor/pentacles/13-rey-oros.jpg" },
        { id: "pent-kn", name: "Caballero de Oros", image: "images/minor/pentacles/14-caballero-oros.jpg" }
    ]
};

// Base de datos de cartas con significados completos
const tarotDeck = [
    // Arcanos Mayores
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
    { name: "El Mundo", meaning: "Realización, cumplimiento, totalidad. Has completado un ciclo importante en tu vida. El éxito y la plenitud están a tu alcance." },

    // Copas
    { name: "As de Copas", meaning: "Nuevo amor, intuición, espiritualidad. Un nuevo comienzo emocional llena tu corazón. Las emociones fluyen como agua fresca." },
    { name: "Dos de Copas", meaning: "Sociedad, amor mutuo, conexión. Una relación armoniosa florece en tu vida. El equilibrio perfecto entre dar y recibir." },
    { name: "Tres de Copas", meaning: "Celebración, amistad, comunidad. Es tiempo de festejar con quienes amas. La alegría compartida se multiplica." },
    { name: "Cuatro de Copas", meaning: "Apatía, contemplación, reevaluación. Reflexiona sobre lo que realmente valoras. Nuevas oportunidades esperan tu atención." },
    { name: "Cinco de Copas", meaning: "Pérdida, duelo, decepción. Aunque hay dolor, nuevas oportunidades te esperan. No todo está perdido, mira hacia adelante." },
    { name: "Seis de Copas", meaning: "Nostalgia, recuerdos, inocencia. El pasado trae lecciones valiosas para el presente. La inocencia perdida puede recuperarse." },
    { name: "Siete de Copas", meaning: "Ilusiones, opciones, sueños. Ten cuidado de no perderte en fantasías irreales. Distingue entre sueños y realidad." },
    { name: "Ocho de Copas", meaning: "Abandono, búsqueda espiritual, desilusión. Es hora de dejar atrás lo que no te sirve. La búsqueda interior comienza." },
    { name: "Nueve de Copas", meaning: "Satisfacción, realización de deseos, contentamiento. Tus deseos se están manifestando. La felicidad material y espiritual se unen." },
    { name: "Diez de Copas", meaning: "Felicidad familiar, armonía emocional, realización. La felicidad duradera está a tu alcance. El hogar y la familia son tu fortaleza." },
    { name: "Sota de Copas", meaning: "Mensajes emocionales, creatividad, intuición joven. Una nueva perspectiva emocional emerge. La creatividad fluye libremente." },
    { name: "Caballero de Copas", meaning: "Romance, encanto, seguir el corazón. Un mensajero del amor se acerca. Las emociones guían tus acciones." },
    { name: "Reina de Copas", meaning: "Intuición, compasión, seguridad emocional. Tu sabiduría emocional es tu mayor fortaleza. Nutres a otros con amor incondicional." },
    { name: "Rey de Copas", meaning: "Madurez emocional, compasión, control de emociones. Equilibrio entre corazón y mente. El liderazgo emocional sabio." },

    // Espadas
    { name: "As de Espadas", meaning: "Nueva idea, claridad mental, verdad. Una revelación importante ilumina tu camino. La verdad corta a través de la confusión." },
    { name: "Dos de Espadas", meaning: "Decisión difícil, estancamiento, equilibrio. Es momento de tomar una decisión importante. El equilibrio mental es crucial." },
    { name: "Tres de Espadas", meaning: "Dolor, traición, separación. Aunque duele, esta experiencia te hará más fuerte. El corazón herido puede sanar." },
    { name: "Cuatro de Espadas", meaning: "Descanso, meditación, recuperación. Necesitas un período de paz y reflexión. La sanación mental requiere quietud." },
    { name: "Cinco de Espadas", meaning: "Conflicto, derrota, tensión. A veces la retirada estratégica es la mejor opción. No todas las batallas vale la pena lucharlas." },
    { name: "Seis de Espadas", meaning: "Transición, viaje, movimiento hacia la calma. Estás dejando atrás tiempos difíciles. Aguas más tranquilas te esperan." },
    { name: "Siete de Espadas", meaning: "Engaño, estrategia, actuar solo. Ten cuidado con las intenciones ocultas. La astucia puede ser necesaria." },
    { name: "Ocho de Espadas", meaning: "Restricción, autolimitación, confusión. Las limitaciones están más en tu mente que en la realidad. La liberación está al alcance." },
    { name: "Nueve de Espadas", meaning: "Ansiedad, pesadillas, preocupación. Tus miedos son más grandes que los problemas reales. La oscuridad antes del amanecer." },
    { name: "Diez de Espadas", meaning: "Final doloroso, traición, toque de fondo. Has llegado al final, pero también al nuevo comienzo. El amanecer sigue a la noche más oscura." },
    { name: "Sota de Espadas", meaning: "Vigilancia, curiosidad, nueva información. Mantente alerta a nuevas revelaciones. La comunicación directa es clave." },
    { name: "Caballero de Espadas", meaning: "Acción impulsiva, coraje, cambio súbito. La acción rápida será necesaria. La valentía supera los obstáculos." },
    { name: "Reina de Espadas", meaning: "Independencia, claridad, comunicación directa. Tu mente aguda es tu mejor herramienta. La verdad sin adornos." },
    { name: "Rey de Espadas", meaning: "Autoridad intelectual, justicia, claridad mental. El liderazgo consciente guía tus decisiones. La sabiduría madura prevalece." },

    // Bastos
    { name: "As de Bastos", meaning: "Nueva empresa, creatividad, inspiración. Una chispa de inspiración enciende nuevos proyectos. El fuego sagrado de la creación." },
    { name: "Dos de Bastos", meaning: "Planificación, decisiones futuras, control personal. Es hora de planificar tu próximo movimiento. El mundo está en tus manos." },
    { name: "Tres de Bastos", meaning: "Expansión, visión de futuro, comercio. Tus esfuerzos comienzan a dar frutos. La paciencia en la inversión se recompensa." },
    { name: "Cuatro de Bastos", meaning: "Celebración, armonía, logros. Un momento de alegría y reconocimiento llega. La estabilidad y la felicidad se combinan." },
    { name: "Cinco de Bastos", meaning: "Competencia, conflicto, desafío. La competencia sana te impulsa hacia adelante. Los desafíos revelan tu verdadera fuerza." },
    { name: "Seis de Bastos", meaning: "Victoria, reconocimiento público, éxito. Tus logros serán reconocidos públicamente. El triunfo después del esfuerzo." },
    { name: "Siete de Bastos", meaning: "Defensa, perseverancia, mantener posición. Defiende lo que has construido con determinación. Tu posición es más fuerte de lo que parece." },
    { name: "Ocho de Bastos", meaning: "Velocidad, comunicación rápida, progreso. Las cosas se aceleran favorablemente. Los mensajes importantes llegan pronto." },
    { name: "Nueve de Bastos", meaning: "Resistencia, persistencia, casi al final. Aunque estés cansado, la meta está cerca. Un último esfuerzo te dará la victoria." },
    { name: "Diez de Bastos", meaning: "Sobrecarga, responsabilidad, carga pesada. Es momento de delegar o reorganizar prioridades. El éxito trae nuevas responsabilidades." },
    { name: "Sota de Bastos", meaning: "Entusiasmo, mensajes, nuevas aventuras. Una oportunidad emocionante se presenta. La juventud y el entusiasmo abren puertas." },
    { name: "Caballero de Bastos", meaning: "Aventura, impulso, cambio de residencia. La aventura y el cambio llaman a tu puerta. El movimiento trae oportunidades." },
    { name: "Reina de Bastos", meaning: "Confianza, determinación, independencia. Tu fuerza interior ilumina el camino. El liderazgo natural inspira a otros." },
    { name: "Rey de Bastos", meaning: "Liderazgo natural, visión empresarial, honor. Tu capacidad de liderazgo inspira a otros. La autoridad se ejerce con sabiduría." },

    // Pentáculos
    { name: "As de Pentáculos", meaning: "Nueva oportunidad, prosperidad, manifestación. Una oportunidad dorada se presenta. Los cimientos de la abundancia se establecen." },
    { name: "Dos de Pentáculos", meaning: "Equilibrio, múltiples prioridades, adaptabilidad. Necesitas equilibrar diferentes aspectos de tu vida. La flexibilidad es clave." },
    { name: "Tres de Pentáculos", meaning: "Trabajo en equipo, colaboración, habilidad. Tu talento es reconocido y valorado. La maestría se desarrolla con práctica." },
    { name: "Cuatro de Pentáculos", meaning: "Seguridad, conservación, control. Es sabia la prudencia, pero no te cierres a nuevas oportunidades. El equilibrio entre ahorrar y gastar." },
    { name: "Cinco de Pentáculos", meaning: "Pérdida financiera, inseguridad, exclusión. Aunque hay dificultades, la ayuda está disponible. La solidaridad en tiempos difíciles." },
    { name: "Seis de Pentáculos", meaning: "Generosidad, reciprocidad, compartir recursos. Dar y recibir están en perfecto equilibrio. La caridad consciente beneficia a todos." },
    { name: "Siete de Pentáculos", meaning: "Evaluación, paciencia, inversión a largo plazo. Tu paciencia será recompensada. Los frutos maduran con el tiempo." },
    { name: "Ocho de Pentáculos", meaning: "Trabajo duro, dedicación, maestría. Tu dedicación al perfeccionamiento da frutos. La excelencia requiere práctica constante." },
    { name: "Nueve de Pentáculos", meaning: "Independencia financiera, lujo, autosuficiencia. Has alcanzado la independencia deseada. El disfrute merecido de los logros." },
    { name: "Diez de Pentáculos", meaning: "Riqueza familiar, herencia, estabilidad a largo plazo. La prosperidad duradera es tuya. El legado se construye generación a generación." },
    { name: "Sota de Pentáculos", meaning: "Oportunidad de estudio, nueva habilidad, enfoque práctico. Una oportunidad de aprendizaje aparece. El conocimiento práctico abre puertas." },
    { name: "Caballero de Pentáculos", meaning: "Responsabilidad, trabajo duro, productividad. El progreso constante te lleva al éxito. La dedicación metódica rinde frutos." },
    { name: "Reina de Pentáculos", meaning: "Abundancia práctica, seguridad, generosidad. Tu sabiduría práctica nutre a otros. La prosperidad se comparte con amor." },
    { name: "Rey de Pentáculos", meaning: "Éxito financiero, seguridad, generosidad. Has alcanzado la maestría en el mundo material. El liderazgo próspero y benevolente." }
];

// Slogans rotativos
const slogans = [
    "Sabiduría ancestral, voz del presente.",
    "Tu camino, iluminado por el Tarot.",
    "El Tarot no predice… revela.",
    "Donde las cartas se convierten en guía."
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
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '4px';
                particle.style.height = '4px';
                particle.style.background = '#c9a9dd';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                
                const rect = button.getBoundingClientRect();
                particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                
                document.body.appendChild(particle);
                
                let opacity = 1;
                let y = 0;
                const animate = setInterval(() => {
                    opacity -= 0.02;
                    y -= 2;
                    particle.style.opacity = opacity;
                    particle.style.transform = `translateY(${y}px)`;
                    
                    if (opacity <= 0) {
                        clearInterval(animate);
                        particle.remove();
                    }
                }, 16);
                
            }, i * 50);
        }
    });
});

// FUNCIONES AVANZADAS PARA MANEJO DE IMÁGENES

// Función para obtener todas las cartas (Mayores + Menores)
function getAllCards() {
    const allCards = [...MAJOR_ARCANA];
    
    // Agregar todas las cartas menores
    Object.values(MINOR_ARCANA).forEach(suit => {
        allCards.push(...suit);
    });
    
    return allCards; // Total: 78 cartas
}

// Función para crear HTML de carta con imagen
function createCardHTML(cardData, index) {
    return `
        <div class="card" data-card-id="${cardData.id || cardData.name}" onclick="flipCard(this, ${index})">
            <div class="card-inner">
                <!-- REVERSO DE LA CARTA -->
                <div class="card-back">
                    <img src="${CARD_BACK_IMAGE}" alt="Reverso de carta" onerror="this.style.display='none'">
                    <div class="card-pattern">🔮<br>TAROT</div>
                </div>
                
                <!-- FRENTE DE LA CARTA -->
                <div class="card-front">
                    <img src="${cardData.image}" alt="${cardData.name}" onerror="handleImageError(this)">
                    <div class="card-name">${cardData.name}</div>
                </div>
            </div>
        </div>
    `;
}

// Manejo de errores de imágenes
function handleImageError(img) {
    // Si la imagen no carga, mostrar placeholder
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
    img.style.objectFit = 'contain';
}

// Función para barajar y seleccionar cartas
function shuffleAndSelectCards(numCards = 3) {
    const allCards = getAllCards();
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numCards);
}

// Función para generar spread completo (si quieres usar imágenes)
function generateSpread() {
    const selectedCards = shuffleAndSelectCards(3);
    const spreadContainer = document.querySelector('.cards-container');
    
    if (spreadContainer) {
        spreadContainer.innerHTML = selectedCards
            .map((card, index) => createCardHTML(card, index))
            .join('');
    }
}

// Función para voltear carta (animación de flip)
function flipCard(cardElement, cardIndex) {
    if (cardElement.classList.contains('flipped')) return;
    
    cardElement.classList.add('flipped');
    
    // Opcional: agregar sonido de carta
    // const flipSound = new Audio('sounds/card-flip.mp3');
    // flipSound.play().catch(() => {});
}

// Funciones de utilidad para debugging
function logCardData() {
    console.log('Total Arcanos Mayores:', MAJOR_ARCANA.length);
    console.log('Total Arcanos Menores:', Object.values(MINOR_ARCANA).reduce((acc, suit) => acc + suit.length, 0));
    console.log('Total cartas:', getAllCards().length);
}

// Función para precargar imágenes (opcional, para mejorar rendimiento)
function preloadImages() {
    const allCards = getAllCards();
    const imagePromises = [];
    
    allCards.forEach(card => {
        if (card.image) {
            const img = new Image();
            img.src = card.image;
            imagePromises.push(
                new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continuar aunque falle
                })
            );
        }
    });
    
    return Promise.all(imagePromises);
}

// Función para validar estructura de imágenes
function validateImageStructure() {
    const allCards = getAllCards();
    const missingImages = [];
    
    allCards.forEach(card => {
        if (!card.image || card.image === '') {
            missingImages.push(card.name);
        }
    });
    
    if (missingImages.length > 0) {
        console.warn('Cartas sin imagen definida:', missingImages);
    }
    
    return missingImages.length === 0;
}

