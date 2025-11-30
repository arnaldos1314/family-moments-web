const { useState, useEffect } = React;

// Base de datos de preguntas organizada por categorías
const questionsDatabase = {
  conocimiento: [
    "¿Cuál es tu recuerdo favorito de la infancia?",
    "¿Qué te hace sentir más orgulloso de ti mismo?",
    "Si pudieras tener un superpoder, ¿cuál sería y por qué?",
    "¿Cuál ha sido el mejor consejo que has recibido?",
    "¿Qué es lo que más te gusta de cada miembro de la familia?",
    "¿Cuál es tu lugar favorito en el mundo y por qué?",
    "¿Qué tradición familiar te gustaría que nunca desapareciera?",
    "¿Qué te gustaría aprender este año?",
    "¿Cuál es tu mayor sueño?",
    "¿Qué te hace reír más?",
    "¿Cuál es tu comida favorita y quién la prepara mejor?",
    "¿Qué película o libro cambió tu forma de ver el mundo?",
    "¿Cuál es tu canción favorita y qué te recuerda?",
    "¿Qué es lo más valiente que has hecho?",
    "¿Qué talento oculto tienes que pocos conocen?",
    "¿Cuál es tu estación del año favorita y por qué?",
    "¿Qué te gustaría que la gente supiera de ti?",
    "¿Cuál es tu mayor miedo y cómo lo enfrentas?",
    "¿Qué animal te representa mejor?",
    "¿Cuál es tu forma favorita de pasar un domingo?"
  ],
  gratitud: [
    "¿Por qué estás agradecido hoy?",
    "¿Quién ha tenido el mayor impacto positivo en tu vida?",
    "¿Qué momento de esta semana te hizo sonreír?",
    "¿Qué cualidad aprecias más en cada persona aquí presente?",
    "¿Qué lección has aprendido recientemente por la que estás agradecido?",
    "¿Qué pequeño placer de la vida diaria aprecias más?",
    "¿Qué habilidad o talento tienes por el que estás agradecido?",
    "¿Qué tradición familiar te hace sentir más agradecido?",
    "¿Qué te hace sentir afortunado cuando piensas en nuestra familia?",
    "¿Qué regalo has recibido que realmente apreciaste?",
    "¿Qué momento difícil te enseñó algo valioso?",
    "¿Qué persona te ayudó cuando más lo necesitabas?",
    "¿Qué lugar especial guardas en tu corazón?",
    "¿Qué recuerdo familiar atesoras más?",
    "¿Qué oportunidad has tenido por la que estás agradecido?",
    "¿Qué te hace apreciar el momento presente?",
    "¿Qué palabra de aliento te marcó profundamente?",
    "¿Qué experiencia compartida en familia valoras más?",
    "¿Qué aspecto de tu vida actual aprecias que antes dabas por sentado?",
    "¿Qué te hace sentir bendecido al final del día?"
  ],
  diversion: [
    "Si fueras un animal por un día, ¿cuál serías y qué harías?",
    "¿Cuál es el peor regalo que has recibido?",
    "Si pudieras ser famoso por algo ridículo, ¿qué sería?",
    "¿Cuál es la cosa más rara que has comido?",
    "Si tu vida fuera una película, ¿qué género sería?",
    "¿Qué emoji te representa mejor hoy?",
    "Si pudieras intercambiar vida con alguien aquí por un día, ¿con quién sería?",
    "¿Cuál es tu chiste o broma favorita?",
    "¿Qué canción te pone de buen humor instantáneamente?",
    "Si pudieras tener cualquier mascota exótica, ¿cuál elegirías?",
    "¿Qué harías si ganaras la lotería mañana?",
    "¿Cuál es tu habilidad inútil pero divertida?",
    "Si pudieras vivir en cualquier época, ¿cuál elegirías?",
    "¿Qué comida nunca podrías dejar de comer?",
    "Si fueras un personaje de dibujos animados, ¿cuál serías?",
    "¿Cuál es tu baile secreto cuando nadie te ve?",
    "¿Qué invento absurdo crearías si pudieras?",
    "¿Cuál es tu peor momento de vergüenza que ahora te hace reír?",
    "Si pudieras ser invisible por un día, ¿qué harías?",
    "¿Qué sabor de helado describe tu personalidad?"
  ],
  reflexion: [
    "¿Qué has aprendido sobre ti mismo este año?",
    "¿Cómo ha cambiado tu perspectiva sobre la familia con el tiempo?",
    "¿Qué valor o principio guía tus decisiones más importantes?",
    "¿Qué significa para ti el éxito?",
    "¿Cómo te gustaría que te recordaran?",
    "¿Qué aspecto de ti mismo te gustaría desarrollar más?",
    "¿Cuál es tu mayor logro personal hasta ahora?",
    "¿Qué experiencia te enseñó la lección más valiosa?",
    "¿Cómo defines la felicidad?",
    "¿Qué te hace sentir más conectado con los demás?",
    "¿Qué consejo le darías a tu yo de hace 5 años?",
    "¿Qué significa para ti ser parte de esta familia?",
    "¿Qué desafío actual te está ayudando a crecer?",
    "¿Cómo has visto crecer a alguien de la familia?",
    "¿Qué tradición o valor familiar quieres transmitir?",
    "¿Qué te inspira a ser mejor persona?",
    "¿Cuál es tu mayor fortaleza y cómo la desarrollaste?",
    "¿Qué momento de tu vida te definió como persona?",
    "¿Qué significa para ti el amor?",
    "¿Cómo equilibras tus sueños personales con tus responsabilidades?"
  ],
  recuerdos: [
    "¿Cuál es tu primera memoria de nuestra familia?",
    "¿Qué viaje o vacación familiar recuerdas con más cariño?",
    "¿Cuál es la tradición familiar más antigua que recuerdas?",
    "¿Qué celebración familiar ha sido la más memorable?",
    "¿Recuerdas alguna anécdota divertida de cuando eras niño?",
    "¿Cuál es el mejor cumpleaños que has tenido?",
    "¿Qué momento familiar te hace llorar de la risa?",
    "¿Cuál es tu recuerdo favorito de las fiestas navideñas?",
    "¿Recuerdas algún momento difícil que superamos juntos?",
    "¿Qué comida te trae recuerdos de la infancia?",
    "¿Cuál es tu recuerdo más tierno con algún familiar?",
    "¿Qué juego o actividad solíamos hacer juntos que extrañas?",
    "¿Recuerdas alguna conversación que cambió tu perspectiva?",
    "¿Cuál es el mejor regalo que has dado o recibido en familia?",
    "¿Qué momento te hizo sentir más cerca de la familia?",
    "¿Recuerdas alguna locura que hicimos juntos?",
    "¿Cuál es tu recuerdo favorito de alguna reunión familiar?",
    "¿Qué tradición o costumbre familiar te gustaría revivir?",
    "¿Recuerdas algún consejo familiar que llevas contigo?",
    "¿Cuál es el momento más orgulloso que has vivido en familia?"
  ],
  futuro: [
    "¿Qué meta familiar te gustaría alcanzar este año?",
    "¿Dónde te ves en 5 años?",
    "¿Qué nueva tradición familiar te gustaría crear?",
    "¿Qué viaje soñado te gustaría hacer con la familia?",
    "¿Qué habilidad nueva te gustaría aprender juntos?",
    "¿Cómo imaginas nuestras reuniones familiares en 10 años?",
    "¿Qué proyecto familiar te emocionaría comenzar?",
    "¿Qué cambio positivo quieres ver en nuestra familia?",
    "¿Qué experiencia nueva quieres vivir este año?",
    "¿Qué legado familiar te gustaría dejar?",
    "¿Qué aventura quieres que vivamos juntos?",
    "¿Qué te gustaría celebrar en familia próximamente?",
    "¿Qué valor quieres que sea más fuerte en nuestra familia?",
    "¿Qué sueño compartes con alguien de la familia?",
    "¿Qué te gustaría mejorar en nuestro tiempo juntos?",
    "¿Qué nueva actividad familiar quieres probar?",
    "¿Cómo te gustaría fortalecer los lazos familiares?",
    "¿Qué momento futuro esperas con más emoción?",
    "¿Qué quieres lograr que haga sentir orgullosa a la familia?",
    "¿Qué historia familiar quieres que se cuente en el futuro?"
  ],
  valores: [
    "¿Qué valor consideras más importante en una familia?",
    "¿Qué significa para ti la lealtad?",
    "¿Cómo defines el respeto en las relaciones familiares?",
    "¿Qué papel juega la honestidad en tu vida?",
    "¿Qué significa para ti ser generoso?",
    "¿Cómo demuestras amor en tu día a día?",
    "¿Qué valor familiar te gustaría fortalecer?",
    "¿Qué significa para ti la responsabilidad?",
    "¿Cómo practicas la empatía con los demás?",
    "¿Qué importancia tiene la comunicación en la familia?",
    "¿Qué significa para ti el perdón?",
    "¿Cómo defines la integridad?",
    "¿Qué papel juega la gratitud en tu felicidad?",
    "¿Qué significa para ti la perseverancia?",
    "¿Cómo demuestras compasión hacia otros?",
    "¿Qué valor te inculcaron que más aprecias?",
    "¿Qué significa para ti la humildad?",
    "¿Cómo balanceas la independencia con la conexión familiar?",
    "¿Qué importancia tiene la paciencia en tu vida?",
    "¿Qué valor quieres transmitir a las futuras generaciones?"
  ],
  creatividad: [
    "Si pudieras escribir un libro sobre nuestra familia, ¿cómo se llamaría?",
    "Inventa una historia usando tres objetos que ves en esta habitación",
    "Si nuestra familia fuera un superhéroe, ¿cuáles serían nuestros poderes?",
    "Crea un eslogan o lema para nuestra familia",
    "Si pudieras diseñar un día perfecto, ¿cómo sería?",
    "Inventa una canción sobre algo que pasó hoy",
    "Si fuéramos un equipo deportivo, ¿cómo nos llamaríamos?",
    "Diseña mentalmente el escudo de armas de nuestra familia",
    "Si pudieras crear una nueva festividad, ¿cuál sería?",
    "Inventa un postre que represente a cada miembro de la familia",
    "Si nuestra familia fuera una película, ¿qué título tendría?",
    "Crea una adivinanza sobre alguien en la familia",
    "Si pudieras inventar un nuevo deporte, ¿cuál sería?",
    "Imagina que encuentras una lámpara mágica, ¿qué tres deseos pides?",
    "Si pudieras fusionar dos animales, ¿cuáles elegirías?",
    "Crea una historia donde todos aquí somos personajes principales",
    "Si pudieras diseñar una casa perfecta, ¿cómo sería?",
    "Inventa una tradición nueva para nuestra familia",
    "Si nuestra familia tuviera un restaurante, ¿qué serviríamos?",
    "Crea un juego nuevo que podamos jugar juntos ahora"
  ]
};

// Modos de juego
const gameModes = [
  {
    id: 'clasico',
    name: 'Modo Clásico',
    icon: '🎯',
    description: 'Preguntas variadas para conocerse mejor',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'rapido',
    name: 'Modo Rápido',
    icon: '⚡',
    description: 'Rondas de 60 segundos para responder',
    color: 'from-yellow-500 to-orange-500',
    timeLimit: 60
  },
  {
    id: 'profundo',
    name: 'Modo Profundo',
    icon: '🌊',
    description: 'Conversaciones significativas y reflexivas',
    color: 'from-indigo-500 to-purple-600',
    categories: ['reflexion', 'valores', 'recuerdos']
  },
  {
    id: 'divertido',
    name: 'Modo Diversión',
    icon: '🎉',
    description: 'Preguntas ligeras y divertidas',
    color: 'from-pink-500 to-rose-500',
    categories: ['diversion', 'creatividad']
  },
  {
    id: 'gratitud',
    name: 'Modo Gratitud',
    icon: '🙏',
    description: 'Enfócate en apreciar lo que tienes',
    color: 'from-green-500 to-emerald-600',
    categories: ['gratitud']
  },
  {
    id: 'desafio',
    name: 'Modo Desafío',
    icon: '🏆',
    description: 'Gana puntos respondiendo creativamente',
    color: 'from-red-500 to-rose-600',
    hasVoting: true
  },
  {
    id: 'ruleta',
    name: 'Ruleta Sorpresa',
    icon: '🎰',
    description: 'Categorías aleatorias e inesperadas',
    color: 'from-purple-500 to-pink-500',
    random: true
  },
  {
    id: 'storytelling',
    name: 'Cuenta Historias',
    icon: '📖',
    description: 'Creen historias juntos, turno por turno',
    color: 'from-teal-500 to-cyan-600',
    collaborative: true
  }
];

function FamilyMomentsApp() {
  const [screen, setScreen] = useState('welcome'); // welcome, modeSelection, game, stats
  const [selectedMode, setSelectedMode] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [playerStats, setPlayerStats] = useState({
    totalPoints: 0,
    questionsAnswered: 0,
    level: 1,
    streak: 0
  });
  const [timer, setTimer] = useState(null);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // Cargar datos del localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('familyMomentsStats');
    if (savedStats) {
      setPlayerStats(JSON.parse(savedStats));
    }
  }, []);

  // Guardar estadísticas
  useEffect(() => {
    localStorage.setItem('familyMomentsStats', JSON.stringify(playerStats));
  }, [playerStats]);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0 && isTimerActive) {
      handleNextQuestion();
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const getRandomQuestion = (categories = null) => {
    const categoriesToUse = categories || Object.keys(questionsDatabase);
    const randomCategory = categoriesToUse[Math.floor(Math.random() * categoriesToUse.length)];
    const categoryQuestions = questionsDatabase[randomCategory];
    
    // Filtrar preguntas ya usadas
    const availableQuestions = categoryQuestions.filter(q => !usedQuestions.includes(q));
    
    // Si todas fueron usadas, reiniciar
    if (availableQuestions.length === 0) {
      setUsedQuestions([]);
      return categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    }
    
    const question = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    setUsedQuestions([...usedQuestions, question]);
    return question;
  };

  const startGame = (mode) => {
    setSelectedMode(mode);
    const categories = mode.categories || null;
    const question = getRandomQuestion(categories);
    setCurrentQuestion(question);
    
    if (mode.timeLimit) {
      setTimer(mode.timeLimit);
      setIsTimerActive(true);
    }
    
    setScreen('game');
  };

  const handleNextQuestion = () => {
    const categories = selectedMode.categories || null;
    const question = getRandomQuestion(categories);
    setCurrentQuestion(question);
    
    // Actualizar estadísticas
    const newStats = {
      ...playerStats,
      questionsAnswered: playerStats.questionsAnswered + 1,
      totalPoints: playerStats.totalPoints + 10,
      streak: playerStats.streak + 1
    };
    
    // Subir de nivel cada 10 preguntas
    if (newStats.questionsAnswered % 10 === 0) {
      newStats.level = Math.floor(newStats.questionsAnswered / 10) + 1;
    }
    
    setPlayerStats(newStats);
    
    if (selectedMode.timeLimit) {
      setTimer(selectedMode.timeLimit);
    }
  };

  const handleSkipQuestion = () => {
    handleNextQuestion();
    // Penalización por saltar
    setPlayerStats({
      ...playerStats,
      streak: 0
    });
  };

  const handleEndGame = () => {
    setIsTimerActive(false);
    setScreen('stats');
  };

  const handleBackToMenu = () => {
    setIsTimerActive(false);
    setScreen('modeSelection');
  };

  const handleRestart = () => {
    setScreen('welcome');
    setSelectedMode(null);
    setUsedQuestions([]);
  };

  // Welcome Screen
  if (screen === 'welcome') {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <div className="text-center animate-fade-in">
          <div className="text-8xl mb-6">👨‍👩‍👧‍👦</div>
          <h1 className="text-5xl font-bold text-white mb-4">Family Moments</h1>
          <p className="text-xl text-white/90 mb-8 max-w-md">
            Fortalece los lazos familiares con conversaciones significativas
          </p>
          <button
            onClick={() => setScreen('modeSelection')}
            className="btn-primary text-white px-12 py-4 rounded-full text-xl font-semibold"
          >
            Comenzar
          </button>
          
          <div className="mt-12 text-white/80">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{playerStats.level}</div>
                <div className="text-sm">Nivel</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">{playerStats.totalPoints}</div>
                <div className="text-sm">Puntos</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">{playerStats.questionsAnswered}</div>
                <div className="text-sm">Preguntas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mode Selection Screen
  if (screen === 'modeSelection') {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 pt-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Elige tu Modo de Juego</h2>
            <p className="text-gray-600">Cada modo ofrece una experiencia única</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {gameModes.map(mode => (
              <div
                key={mode.id}
                onClick={() => startGame(mode)}
                className="game-card card-shadow bg-white rounded-2xl p-6 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${mode.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                  {mode.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{mode.name}</h3>
                <p className="text-gray-600">{mode.description}</p>
                {mode.timeLimit && (
                  <div className="mt-3 text-sm text-orange-600 font-semibold">
                    ⏱️ {mode.timeLimit} segundos por pregunta
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button
            onClick={() => setScreen('welcome')}
            className="w-full py-3 bg-gray-200 hover:bg-gray-300 rounded-xl font-semibold text-gray-700 transition"
          >
            ← Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  // Game Screen
  if (screen === 'game') {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${selectedMode.color} p-4 flex flex-col`}>
        {/* Header */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6 text-white">
            <button onClick={handleBackToMenu} className="text-2xl">←</button>
            <div className="text-center">
              <div className="text-sm opacity-90">{selectedMode.name}</div>
              <div className="font-bold text-lg">Nivel {playerStats.level}</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Puntos</div>
              <div className="font-bold text-lg">{playerStats.totalPoints}</div>
            </div>
          </div>

          {/* Timer */}
          {selectedMode.timeLimit && (
            <div className="mb-6">
              <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-1000"
                  style={{ width: `${(timer / selectedMode.timeLimit) * 100}%` }}
                ></div>
              </div>
              <div className="text-center text-white font-bold mt-2 text-2xl">
                {timer}s
              </div>
            </div>
          )}
        </div>

        {/* Question Card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow animate-fade-in">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{selectedMode.icon}</div>
                <div className="text-sm text-gray-500 mb-4">
                  Pregunta #{playerStats.questionsAnswered + 1}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center leading-relaxed">
                {currentQuestion}
              </h3>
              
              {playerStats.streak > 0 && (
                <div className="mt-6 text-center">
                  <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                    🔥 Racha: {playerStats.streak}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="max-w-4xl mx-auto w-full mt-6 space-y-3">
          <button
            onClick={handleNextQuestion}
            className="w-full bg-white text-gray-800 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition"
          >
            Siguiente Pregunta →
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleSkipQuestion}
              className="bg-white/20 text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition"
            >
              Saltar
            </button>
            <button
              onClick={handleEndGame}
              className="bg-white/20 text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition"
            >
              Terminar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Stats Screen
  if (screen === 'stats') {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 card-shadow animate-fade-in">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎊</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">¡Gran Sesión!</h2>
            <p className="text-gray-600">Resumen de tu partida</p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-gray-600">Preguntas Respondidas</span>
              <span className="font-bold text-xl text-gray-800">{playerStats.questionsAnswered}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-gray-600">Puntos Totales</span>
              <span className="font-bold text-xl text-gray-800">{playerStats.totalPoints}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-gray-600">Nivel Actual</span>
              <span className="font-bold text-xl text-gray-800">Nivel {playerStats.level}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
              <span className="text-orange-700">Mejor Racha</span>
              <span className="font-bold text-xl text-orange-700">🔥 {playerStats.streak}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => setScreen('modeSelection')}
              className="w-full btn-primary text-white py-4 rounded-xl font-bold text-lg"
            >
              Jugar Otro Modo
            </button>
            <button
              onClick={handleRestart}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-xl font-semibold transition"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Render App
ReactDOM.render(<FamilyMomentsApp />, document.getElementById('root'));
