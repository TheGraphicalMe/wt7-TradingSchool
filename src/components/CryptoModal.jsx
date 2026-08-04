import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const NETWORKS = [
  {
    id: 'erc20',
    name: 'ERC20',
    label: 'Ethereum (ERC20)',
    address: '0x5aeFA7F85e798a729988913e3aB5d5403f2Eb6f8',
    qr: '/assets/media/erc.jpeg',
  },
  {
    id: 'trc20',
    name: 'TRC20',
    label: 'Tron (TRC20)',
    address: 'TTFdcMaZFdSkwJDhxJfMEbuGj3pACzpJER',
    qr: '/assets/media/trc.jpeg',
  },
  {
    id: 'bep20',
    name: 'BEP20',
    label: 'BSC (BEP20)',
    address: '0x5aeFA7F85e798a729988913e3aB5d5403f2Eb6f8',
    qr: '/assets/media/bep.jpeg',
  },
]



export default function CryptoModal({ isOpen, onClose, amount = '$139', planName = 'Basic to Advance Batch' }) {
  const [activeNetwork, setActiveNetwork] = useState(NETWORKS[0])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(activeNetwork.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return createPortal(
    <div
      onClick={handleOverlayClick}
      className="cm-overlay"
    >
      <div className="cm-container">
        
        {/* Premium Rotating Border */}
        <div className="cm-rotating-border-wrap">
          <div className="cm-rotating-border" />
        </div>

        {/* Border Glow */}
        <div className="cm-border-glow-wrap">
          <div className="cm-rotating-border-glow" />
        </div>

        {/* Card Body */}
        <div className="cm-card">
          {/* Glow Effects */}
          <div className="cm-inner-glows">
            <div className="cm-glow-top" />
            <div className="cm-glow-bottom" />
          </div>

          {/* Close Button */}
          <button onClick={onClose} className="cm-close-btn">✕</button>

          <div className="cm-content">

            {/* ─── Header ─── */}
            <div className="cm-header">
              <div className="cm-header-top">
                <div className="cm-plan-badge">
                  <span className="cm-badge-dot" />
                  <span className="cm-badge-text">{planName}</span>
                </div>
                <h3 className="cm-title">
                  Pay <span className="cm-title-accent">{amount}</span>
                </h3>
              </div>
              <p className="cm-subtitle">
                Choose your network, scan the QR or copy the wallet address, and send the exact amount.
              </p>
            </div>

            {/* ─── Network Tabs ─── */}
            <div className="cm-network-tabs">
              <span className="cm-label">Network</span>
              {NETWORKS.map((net) => (
                <button
                  key={net.id}
                  onClick={() => { setActiveNetwork(net); setCopied(false); }}
                  className={`cm-tab-btn ${activeNetwork.id === net.id ? 'active' : ''}`}
                >
                  {net.name}
                </button>
              ))}
            </div>

            {/* ─── Dedicated Yellow Warning Box ─── */}
            <div className="cm-warning-box">
              <div className="cm-warning-line" />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cm-warning-icon"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" /></svg>
              <span className="cm-warning-text">Send USDT Only</span>
            </div>

            {/* ─── Main Content: QR + Details side by side ─── */}
            <div className="cm-main-split">

              {/* Left: QR Code */}
              <div className="cm-qr-area">
                <div className="cm-qr-box">
                  {activeNetwork.qr ? (
                    <img src={activeNetwork.qr} alt={`${activeNetwork.name} QR Code`} />
                  ) : (
                    <div className="cm-qr-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <rect x="14" y="14" width="3" height="3" />
                        <rect x="18" y="14" width="3" height="3" />
                        <rect x="14" y="18" width="3" height="3" />
                        <rect x="18" y="18" width="3" height="3" />
                      </svg>
                      <span className="cm-qr-placeholder-text">{activeNetwork.name} QR</span>
                    </div>
                  )}
                </div>
                <span className="cm-qr-caption">Scan to pay</span>
              </div>

              {/* Right: Address + Info + CTA stacked */}
              <div className="cm-details-area">
                {/* Wallet Address Card */}
                <div className="cm-address-card">
                  <div className="cm-address-line" />
                  <div className="cm-address-header">
                    <span className="cm-address-network-label">Network: <strong>{activeNetwork.label}</strong></span>
                  </div>
                  
                  <label className="cm-input-label">Wallet Address</label>
                  
                  <div className="cm-input-group">
                    <input
                      type="text"
                      readOnly
                      value={activeNetwork.address}
                      className="cm-address-input"
                    />
                    <button onClick={handleCopy} className="cm-copy-btn">
                      {copied ? '✓ COPIED' : 'COPY'}
                    </button>
                  </div>
                  <div className="cm-risk-warning">
                    <svg className="cm-risk-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" /></svg>
                    <span className="cm-risk-text">Sending crypto on the wrong network may result in <strong>Permanent Loss of Funds</strong>.</span>
                  </div>
                </div>
                
                {/* After Payment */}
                <div className="cm-instructions">
                  <p className="cm-instruction-text">
                    After payment, send a <strong>Transaction Screenshot</strong> along with the <strong>TxID</strong>, <strong>Name</strong>, and <strong>Email</strong> on WhatsApp to activate your plan.
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/918887515391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cm-whatsapp-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Send Screenshot on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .cm-overlay {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: start; justify-content: center;
          padding: 24px; overflow-y: auto;
          background: rgba(5,7,10,0.85); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          animation: cmFadeIn 0.3s ease-out forwards;
        }
        .cm-container {
          position: relative; width: 100%; max-width: 850px; margin: 32px 0;
          animation: cmScaleIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .cm-rotating-border-wrap {
          position: absolute; inset: -2px; border-radius: 30px; overflow: hidden; pointer-events: none; z-index: 0;
        }
        .cm-rotating-border {
          position: absolute; inset: -100%; animation: cmSpin 16s linear infinite;
          background: conic-gradient(from 0deg, 
            transparent 0%, transparent 20%, rgba(155,109,255,0.15) 40%, rgba(155,109,255,0.9) 49.5%, #ffffff 50%, 
            transparent 50%, transparent 70%, rgba(155,109,255,0.15) 90%, rgba(155,109,255,0.9) 99.5%, #ffffff 100%);
        }
        .cm-border-glow-wrap {
          position: absolute; inset: -2.5px; border-radius: 30px; overflow: hidden; pointer-events: none; blur: 12px; opacity: 0.6; z-index: 0;
          filter: blur(12px);
        }
        .cm-rotating-border-glow {
          position: absolute; inset: -100%; animation: cmSpin 16s linear infinite;
          background: conic-gradient(from 0deg, 
            transparent 0%, transparent 20%, rgba(155,109,255,0.4) 40%, #9B6DFF 50%, 
            transparent 50%, transparent 70%, rgba(155,109,255,0.4) 90%, #9B6DFF 100%);
        }
        .cm-card {
          position: relative; z-index: 10; width: 100%; border-radius: 28px; padding: 32px;
          background: linear-gradient(165deg, rgba(16, 20, 26, 1) 0%, rgba(9, 11, 15, 1) 100%);
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.06);
          overflow: visible;
        }
        .cm-inner-glows {
          position: absolute; inset: 0; border-radius: 28px; overflow: hidden; pointer-events: none; z-index: 0;
        }
        .cm-glow-top {
          position: absolute; -top: 120px; -right: 120px; width: 350px; height: 350px;
          mix-blend-mode: screen; opacity: 0.12; filter: blur(80px); background: #9B6DFF;
        }
        .cm-glow-bottom {
          position: absolute; -bottom: 120px; -left: 120px; width: 300px; height: 300px;
          mix-blend-mode: screen; opacity: 0.15; filter: blur(80px); background: #C4A0FF;
        }
        .cm-close-btn {
          position: absolute; z-index: 50; top: 20px; right: 20px; width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.5);
          cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
          transition: all 0.3s; backdrop-filter: blur(10px);
        }
        .cm-close-btn:hover {
          background: rgba(255,255,255,0.08); color: white; border-color: rgba(255,255,255,0.1);
          transform: rotate(90deg) scale(1.05);
        }
        .cm-content { display: flex; flex-direction: column; gap: 24px; position: relative; z-index: 10; }
        .cm-header { display: flex; flex-direction: column; gap: 12px; padding-right: 48px; }
        .cm-header-top { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
        .cm-plan-badge {
          display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 100px;
          background: rgba(155,109,255,0.08); border: 1px solid rgba(155,109,255,0.2);
        }
        .cm-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #9B6DFF; box-shadow: 0 0 8px #9B6DFF; animation: cmPulse 2s infinite; }
        .cm-badge-text { font-family: var(--font-cond); font-weight: 700; font-size: 0.75rem; letter-spacing: 0.12em; color: #C4A0FF; text-transform: uppercase; }
        .cm-title { font-family: var(--font-cond); font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 900; text-transform: uppercase; color: white; margin: 0; line-height: 1; }
        .cm-title-accent { color: #9B6DFF; background: linear-gradient(to right, #9B6DFF, #D8B4FE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .cm-subtitle { font-family: var(--font-body); color: rgba(255,255,255,0.5); font-size: 0.85rem; line-height: 1.5; margin: 0; }
        .cm-network-tabs { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .cm-label { font-family: var(--font-cond); font-weight: 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.15em; font-size: 11px; margin-right: 4px; }
        .cm-tab-btn {
          padding: 10px 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.6); font-family: var(--font-cond); font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: all 0.3s;
        }
        .cm-tab-btn:hover { background: rgba(255,255,255,0.1); color: white; }
        .cm-tab-btn.active { border-color: #9B6DFF; background: rgba(155,109,255,0.1); color: #C4A0FF; box-shadow: 0 0 15px rgba(155,109,255,0.15); }
        .cm-warning-box {
          position: relative; overflow: hidden; border-radius: 12px; width: fit-content;
          background: rgba(234,179,8,0.1); border: 1px solid rgba(234,179,8,0.2);
          padding: 10px 24px; display: flex; align-items: center; gap: 10px;
        }
        .cm-warning-line { position: absolute; top: 0; left: 0; width: 100%; height: 1px; background: linear-gradient(to right, transparent, rgba(234,179,8,0.5), transparent); }
        .cm-warning-text { color: #EAB308; font-family: var(--font-cond); font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; }
        .cm-main-split { display: flex; gap: 24px; }
        @media (max-width: 768px) { .cm-main-split { flex-direction: column; } }
        .cm-qr-area { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
        .cm-qr-box {
          width: 200px; height: 200px; border-radius: 16px; background: white; padding: 4px; overflow: hidden;
          border: 2px solid rgba(255,255,255,0.2); shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .cm-qr-box img { width: 100%; height: 100%; object-fit: contain; }
        .cm-qr-placeholder { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
        .cm-qr-placeholder-text { color: #aaa; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-top: 8px; }
        .cm-qr-caption { color: rgba(255,255,255,0.4); font-size: 11px; font-family: var(--font-cond); text-transform: uppercase; letter-spacing: 0.1em; }
        .cm-details-area { flex: 1; display: flex; flex-direction: column; gap: 16px; min-width: 0; }
        .cm-address-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 16px;
          position: relative; overflow: hidden;
        }
        .cm-address-line { position: absolute; top: 0; left: 0; width: 100%; height: 1px; background: linear-gradient(to right, transparent, rgba(155,109,255,0.5), transparent); }
        .cm-address-network-label { color: rgba(255,255,255,0.5); font-size: 12px; display: block; margin-bottom: 12px; }
        .cm-address-network-label strong { color: white; }
        .cm-input-label { color: rgba(255,255,255,0.4); font-size: 11px; font-family: var(--font-cond); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 6px; }
        .cm-input-group { display: flex; gap: 8px; }
        .cm-address-input {
          flex: 1; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
          padding: 10px 12px; color: rgba(255,255,255,0.9); font-family: monospace; font-size: 12px; outline: none; min-width: 0;
        }
        .cm-copy-btn {
          height: 38px; padding: 0 16px; border-radius: 8px; background: rgba(155,109,255,0.2); border: 1px solid rgba(155,109,255,0.3);
          color: #C4A0FF; font-family: var(--font-cond); font-weight: 700; font-size: 12px; cursor: pointer; transition: all 0.3s;
        }
        .cm-copy-btn:hover { background: rgba(155,109,255,0.4); }
        .cm-risk-warning { display: flex; gap: 8px; margin-top: 12px; align-items: start; }
        .cm-risk-text { color: #F59E0B; font-size: 11px; line-height: 1.4; }
        .cm-instructions { background: rgba(155,109,255,0.05); border: 1px solid rgba(155,109,255,0.2); border-radius: 12px; padding: 14px; margin-top: auto; }
        .cm-instruction-text { color: rgba(255,255,255,0.7); font-size: 13px; margin: 0; line-height: 1.5; }
        .cm-instruction-text strong { color: white; }
        .cm-whatsapp-btn {
          display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 14px; border-radius: 12px;
          background: linear-gradient(to right, #128C7E, #25D366); color: white; font-family: var(--font-cond);
          font-weight: 700; font-size: clamp(0.75rem, 4vw, 0.9rem); text-transform: uppercase; letter-spacing: 0.05em; text-decoration: none;
          transition: all 0.3s; box-shadow: 0 0 30px rgba(37,211,102,0.2); border: none; cursor: pointer; white-space: nowrap;
        }
        .cm-whatsapp-btn:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(37,211,102,0.4); }
        
        @keyframes cmFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cmScaleIn { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes cmSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes cmPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
      `}</style>
    </div>,
    document.body
  )
}