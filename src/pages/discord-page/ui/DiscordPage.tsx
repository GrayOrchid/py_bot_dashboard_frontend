import { Hash, Settings, Mic, Headphones, Phone } from 'lucide-react';
import { ListItem } from '@/shared/ui';

const DiscordPage = () => {
  return (
    <div className="discord-page">
      {/* 1. Боковая панель каналов (Internal Sidebar) */}
      <aside className="discord-page__sidebar">
        <header className="discord-page__header">
          <h1 className="discord-page__title">Community Server</h1>
        </header>

        <nav className="discord-page__nav">
          <div className="discord-page__section">
            <p className="discord-page__section-label">Text Channels</p>
            <ListItem 
              label="general" 
              icon={<Hash size={18} />} 
              isActive={true}
              onClick={() => console.log('Join general')}
              className="discord-page__item--active"
            />
            <ListItem 
              label="development" 
              icon={<Hash size={18} />} 
              onClick={() => console.log('Join dev')}
            />
          </div>

          <div className="discord-page__section">
            <p className="discord-page__section-label">Voice Channels</p>
            <ListItem 
              label="Lounge" 
              icon={<Phone size={18} />} 
              onClick={() => console.log('Join voice')}
              action={<span className="discord-page__badge">12</span>}
            />
          </div>
        </nav>

        {/* User Control Panel */}
        <footer className="discord-page__user-panel">
          <div className="discord-page__user-info">
            <div className="discord-page__avatar" />
            <div className="discord-page__user-text">
              <span className="discord-page__username">Username</span>
              <span className="discord-page__user-tag">#0001</span>
            </div>
          </div>
          <div className="discord-page__user-actions">
            <Mic size={18} />
            <Headphones size={18} />
            <Settings size={18} />
          </div>
        </footer>
      </aside>

      {/* 2. Основная область чата */}
      <main className="discord-page__chat">
        <header className="discord-page__chat-header">
          <Hash size={20} className="text-secondary" />
          <span className="discord-page__chat-title">general</span>
        </header>
        
        <div className="discord-page__messages">
          <div className="discord-page__empty-state">
            <h2>Welcome to #general!</h2>
            <p>This is the start of the general channel.</p>
          </div>
        </div>

        <div className="discord-page__input-wrapper">
          <input 
            type="text" 
            className="discord-page__input" 
            placeholder="Message #general" 
          />
        </div>
      </main>
    </div>
  );
};

export default DiscordPage;