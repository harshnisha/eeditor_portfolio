import { useState, useEffect } from 'react';
import { Menu, X, Play, Pause, ChevronRight, Mail, User, Briefcase, Award, Wrench, Film, Palette, Clapperboard, Image, Sparkles, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'samples', 'services', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'samples', label: 'Samples' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Film className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold text-gradient">EDITOR</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-green-400 bg-green-400/10'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-dark border-t border-zinc-800/50">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-green-400 bg-green-400/10'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-zinc-400">Available for Work</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up">
              <span className="text-white">EDITOR</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-zinc-400 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Professional Video Editor & Graphic Designer
            </p>

            {/* Domain */}
            <p className="text-lg text-green-400 font-mono mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              editor.client
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="glass-card rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">18</div>
                <div className="text-sm text-zinc-500">Age</div>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">3+</div>
                <div className="text-sm text-zinc-500">Years Experience</div>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">50+</div>
                <div className="text-sm text-zinc-500">Clients Closed</div>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">Male</div>
                <div className="text-sm text-zinc-500">Gender</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                Contact Me
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Worked With */}
            <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-zinc-500 text-sm mb-4">Worked With</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm">Companies</span>
                <span className="px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm">Agencies</span>
                <span className="px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm">Content Creators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <User className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">About Me</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Crafting Visual <span className="text-gradient">Stories</span>
              </h2>

              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I am a passionate video editor and graphic designer from India, dedicated to transforming raw footage into captivating visual narratives. With over 3 years of hands-on experience, I have honed my skills in both short-form and long-form content creation.
                </p>
                <p>
                  My educational background includes completing 12th grade, after which I pursued my passion for creative editing. I specialize in creating engaging content for social media platforms, YouTube, and professional presentations.
                </p>
                <p>
                  Having worked with numerous companies and agencies, I understand the importance of delivering high-quality work that meets client expectations. My approach combines technical expertise with creative vision to produce content that stands out.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-card rounded-xl p-4">
                  <div className="text-zinc-500 text-sm mb-1">Nationality</div>
                  <div className="text-white font-semibold">Indian</div>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <div className="text-zinc-500 text-sm mb-1">Education</div>
                  <div className="text-white font-semibold">12th Pass</div>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <div className="text-zinc-500 text-sm mb-1">Experience</div>
                  <div className="text-white font-semibold">3+ Years</div>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <div className="text-zinc-500 text-sm mb-1">Specialization</div>
                  <div className="text-white font-semibold">Short & Long Form</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl p-8 border-glow">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center animate-pulse-glow">
                      <Film className="w-16 h-16 text-black" />
                    </div>
                    <p className="text-zinc-500 text-sm">Professional Editor</p>
                    <p className="text-white font-bold text-lg">Since 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section id="samples" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Clapperboard className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Sample <span className="text-gradient">Work</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Check out some of my recent editing projects. Click on any video to play and see the quality of work I deliver.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="glass-card rounded-2xl overflow-hidden border-glow group">
              <div className="relative aspect-[9/16] bg-zinc-900">
                <video
                  src="/videos/sample1.mp4"
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                  ref={(el) => {
                    if (el) {
                      if (playingVideo === 'sample1') {
                        el.play();
                        el.muted = false;
                      } else {
                        el.pause();
                        el.currentTime = 0;
                        el.muted = true;
                      }
                    }
                  }}
                />
                {/* Play Overlay */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${playingVideo === 'sample1' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  onClick={() => setPlayingVideo('sample1')}
                >
                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-glow">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                </div>
                {/* Pause Button (when playing) */}
                {playingVideo === 'sample1' && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => setPlayingVideo(null)}
                  >
                    <div className="w-16 h-16 rounded-full bg-zinc-900/80 flex items-center justify-center">
                      <Pause className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Before/After Editing</h3>
                <p className="text-zinc-400 text-sm">Professional video editing with motion graphics and color grading</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="glass-card rounded-2xl overflow-hidden border-glow group">
              <div className="relative aspect-[9/16] bg-zinc-900">
                <video
                  src="/videos/sample2.mp4"
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                  ref={(el) => {
                    if (el) {
                      if (playingVideo === 'sample2') {
                        el.play();
                        el.muted = false;
                      } else {
                        el.pause();
                        el.currentTime = 0;
                        el.muted = true;
                      }
                    }
                  }}
                />
                {/* Play Overlay */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${playingVideo === 'sample2' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  onClick={() => setPlayingVideo('sample2')}
                >
                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-glow">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                </div>
                {/* Pause Button (when playing) */}
                {playingVideo === 'sample2' && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => setPlayingVideo(null)}
                  >
                    <div className="w-16 h-16 rounded-full bg-zinc-900/80 flex items-center justify-center">
                      <Pause className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Podcast Editing</h3>
                <p className="text-zinc-400 text-sm">Dynamic text animations and visual effects for interview content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Briefcase className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What I <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Professional editing services tailored to your needs. From short-form social content to long-form productions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Short Video Editing */}
            <div className="glass-card rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Film className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Short Video Editing</h3>
              <p className="text-zinc-400 text-sm mb-4">Reels, Shorts, TikTok</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Fast-paced editing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Trendy transitions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Caption animations
                </li>
              </ul>
            </div>

            {/* Long Video Editing */}
            <div className="glass-card rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Clapperboard className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Long Video Editing</h3>
              <p className="text-zinc-400 text-sm mb-4">YouTube, Podcasts</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Story-driven editing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Multi-camera sync
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Audio enhancement
                </li>
              </ul>
            </div>

            {/* Graphic Designing */}
            <div className="glass-card rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Palette className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Graphic Designing</h3>
              <p className="text-zinc-400 text-sm mb-4">Thumbnails, Posters</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Eye-catching thumbnails
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Social media posts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Brand identity
                </li>
              </ul>
            </div>

            {/* Social Media Content */}
            <div className="glass-card rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Sparkles className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Social Media Content</h3>
              <p className="text-zinc-400 text-sm mb-4">Content Editing</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Platform optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Engaging hooks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Viral potential
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Proficient in industry-standard tools and techniques to deliver professional-grade content.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Short Video Editing', level: 95, icon: Film },
              { name: 'Long Video Editing', level: 90, icon: Clapperboard },
              { name: 'Graphic Design', level: 85, icon: Palette },
              { name: 'Adobe Premiere Pro', level: 92, icon: Wrench },
              { name: 'After Effects', level: 88, icon: Sparkles },
              { name: 'Photoshop', level: 85, icon: Image },
              { name: 'Color Grading', level: 80, icon: Palette },
              { name: 'Motion Graphics', level: 82, icon: Film },
            ].map((skill, index) => (
              <div 
                key={skill.name}
                className="glass-card rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <skill.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-sm text-green-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Mail className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Get in Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Contact <span className="text-gradient">Me</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-glow">
              {showSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-green-500 focus:ring-green-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                      className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-green-500 focus:ring-green-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-green-500 focus:ring-green-500/20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-6 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Film className="w-4 h-4 text-black" />
              </div>
              <span className="text-lg font-bold text-gradient">EDITOR</span>
            </div>
            <p className="text-zinc-500 text-sm">
              © 2024 EDITOR. All rights reserved. editor.client
            </p>
            <div className="flex items-center gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-zinc-500 hover:text-green-400 text-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
