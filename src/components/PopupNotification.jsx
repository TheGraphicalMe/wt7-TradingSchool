import React, { useState } from 'react';

const PopupNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Outfit:wght@300;400;600&display=swap');
        
        @keyframes fadeInBg {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(12px); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ring {
          0% { transform: rotate(0); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-10deg); }
          30% { transform: rotate(15deg); }
          40% { transform: rotate(-10deg); }
          50% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
        .ringing-bell {
          transform-origin: top center;
          animation: ring 2s infinite ease-in-out;
        }
      `}</style>
      
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeInBg 0.5s ease forwards'
      }}>
        <div style={{
          position: 'relative',
          background: 'linear-gradient(145deg, rgba(20, 20, 22, 0.95), rgba(10, 10, 12, 0.95))',
          border: '1px solid rgba(155, 109, 255, 0.35)',
          borderRadius: '24px',
          padding: '44px 36px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(155, 109, 255, 0.15), inset 0 1px 1px rgba(255,255,255,0.1)',
          maxWidth: '420px',
          width: '90%',
          textAlign: 'center',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          animation: 'popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          <button 
            onClick={() => setIsVisible(false)}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
          >
            ×
          </button>
          
          <div>
            <h3 style={{ 
              margin: '0 0 12px 0', 
              fontFamily: "'Cinzel', serif", 
              fontSize: '1.9rem', 
              color: '#9B6DFF', 
              fontWeight: 700, 
              letterSpacing: '0.05em',
              textShadow: '0 2px 10px rgba(155,109,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <svg 
                className="ringing-bell"
                width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ color: '#9B6DFF', filter: 'drop-shadow(0 0 5px rgba(155,109,255,0.5))' }}
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              Special Offer
            </h3>
            <p style={{ 
              margin: 0, 
              fontFamily: "'Outfit', sans-serif", 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 300
            }}>
              Join the upcoming live class at just <br/>
              <strong style={{ 
                color: '#FFD700', 
                fontSize: '1.8rem', 
                fontWeight: 800, 
                display: 'inline-block', 
                marginTop: '12px',
                textShadow: '0 0 15px rgba(255, 215, 0, 0.4)',
                padding: '4px 16px',
                background: 'rgba(255, 215, 0, 0.08)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '8px'
              }}>
                $139
              </strong>
            </p>
          </div>
          
          <button 
            onClick={() => {
              setIsVisible(false);
              const element = document.getElementById('special-offer');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              } else {
                window.location.href = '/#special-offer';
              }
            }}
            className="btn btn-accent"
            style={{ 
              width: '100%', 
              padding: '16px', 
              justifyContent: 'center', 
              fontSize: '0.95rem', 
              marginTop: '4px',
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '0.12em',
              fontWeight: 600,
              textTransform: 'uppercase',
              borderRadius: '8px',
              border: 'none'
            }}
          >
            View Offer
          </button>
        </div>
      </div>
    </>
  );
};

export default PopupNotification;
