import React, { useState } from 'react';
import { Star, Building2, Microscope, Layout, Boxes, BookOpen, Gauge, Laptop, Send } from 'lucide-react';

function App() {
  const sections = [
    {
      id: 'physical',
      title: 'Museu Físico',
      topics: [
        { id: 'specimens', name: 'Qualidade dos Espécimes Taxidermizados', icon: <Microscope className="w-6 h-6" /> },
        { id: 'organization', name: 'Organização e Ambiente', icon: <Boxes className="w-6 h-6" /> },
        { id: 'infrastructure', name: 'Infraestrutura do Museu', icon: <Building2 className="w-6 h-6" /> },
      ]
    },
    {
      id: 'website',
      title: 'Website',
      topics: [
        { id: 'design', name: 'Design e Usabilidade', icon: <Layout className="w-6 h-6" /> },
        { id: 'content', name: 'Conteúdo Informativo', icon: <BookOpen className="w-6 h-6" /> },
        { id: 'interactive', name: 'Funcionalidades Interativas', icon: <Laptop className="w-6 h-6" /> },
        { id: 'performance', name: 'Performance Técnica', icon: <Gauge className="w-6 h-6" /> },
      ]
    }
  ];

  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [hoveredRatings, setHoveredRatings] = useState({});

  const getRatingText = (rating) => {
    switch (rating) {
      case 1: return 'Ruim';
      case 2: return 'Regular';
      case 3: return 'Bom';
      case 4: return 'Muito Bom';
      case 5: return 'Excelente';
      default: return '';
    }
  };

  const handleRating = (topicId, rating) => {
    setRatings(prev => ({ ...prev, [topicId]: rating }));
  };

  const handleComment = (topicId, comment) => {
    setComments(prev => ({ ...prev, [topicId]: comment }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ratings, comments });
    alert('Feedback enviado com sucesso!');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEFAE0' }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#283618' }}>
            Avaliação do Museu
          </h1>
          <p className="text-lg" style={{ color: '#606C38' }}>
            Ajude-nos a melhorar sua experiência compartilhando seu feedback
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {sections.map((section) => (
            <div key={section.id}>
              <h2 
                className="text-2xl font-bold pb-2 mb-6 border-b-2" 
                style={{ color: '#283618', borderColor: '#DDA15E' }}
              >
                {section.title}
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                {section.topics.map((topic) => (
                  <div
                    key={topic.id}
                    className="bg-white rounded-lg p-6 shadow-lg"
                    style={{ borderLeft: '4px solid #DDA15E' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div style={{ color: '#BC6C25' }}>{topic.icon}</div>
                      <h3 className="text-lg font-semibold" style={{ color: '#283618' }}>
                        {topic.name}
                      </h3>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className="transition-colors"
                              onMouseEnter={() => setHoveredRatings(prev => ({ ...prev, [topic.id]: star }))}
                              onMouseLeave={() => setHoveredRatings(prev => ({ ...prev, [topic.id]: 0 }))}
                              onClick={() => handleRating(topic.id, star)}
                            >
                              <Star
                                className={`w-7 h-7 ${
                                  (hoveredRatings[topic.id] || ratings[topic.id] || 0) >= star
                                    ? 'fill-current'
                                    : ''
                                }`}
                                style={{
                                  color: (hoveredRatings[topic.id] || ratings[topic.id] || 0) >= star
                                    ? '#DDA15E'
                                    : '#BC6C25'
                                }}
                              />
                            </button>
                          ))}
                        </div>
                        <span 
                          className="text-lg font-medium transition-colors"
                          style={{ 
                            color: '#606C38',
                            opacity: (hoveredRatings[topic.id] || ratings[topic.id]) ? 1 : 0 
                          }}
                        >
                          {getRatingText(hoveredRatings[topic.id] || ratings[topic.id] || 0)}
                        </span>
                      </div>
                    </div>

                    <textarea
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-opacity-50"
                      style={{
                        borderColor: '#DDA15E',
                        backgroundColor: '#FEFAE0',
                        color: '#283618'
                      }}
                      rows={3}
                      placeholder="Deixe seu comentário sobre este aspecto..."
                      value={comments[topic.id] || ''}
                      onChange={(e) => handleComment(topic.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-semibold transition-colors"
            style={{
              backgroundColor: '#606C38',
              hover: { backgroundColor: '#283618' }
            }}
          >
            <Send className="w-5 h-5" />
            Enviar Avaliação
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;