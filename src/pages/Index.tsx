import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  Brain, 
  TrendingUp, 
  ExternalLink, 
  Mail, 
  Phone, 
  Download,
  Linkedin,
  Github,
  Star,
  ChevronDown,
  Zap,
  Users,
  Target,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'AI & Machine Learning', icon: Brain, level: 95 },
    { name: 'Web Development', icon: Code, level: 90 },
    { name: 'Digital Marketing', icon: TrendingUp, level: 88 },
    { name: 'Data Analytics', icon: BarChart3, level: 85 },
  ];

  const projects = [
    {
      title: 'AI-Powered Lead Generation System',
      description: 'Built an intelligent lead scoring system using machine learning that increased qualified leads by 45% for a B2B SaaS company.',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      results: '+45% qualified leads, +28% conversion rate',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Marketing Automation Platform',
      description: 'Developed a comprehensive marketing automation tool that streamlined campaign management and boosted ROI by 60%.',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'AWS'],
      results: '+60% ROI, -40% manual work',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'E-commerce Analytics Dashboard',
      description: 'Created a real-time analytics dashboard that provided actionable insights, resulting in 25% increase in sales.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'MongoDB'],
      results: '+25% sales, real-time insights',
      image: '/api/placeholder/600/400',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP Marketing, TechCorp',
      content: 'Working with them transformed our digital marketing strategy. The AI-powered solutions delivered exceptional results.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, StartupX',
      content: 'Their expertise in both technical implementation and marketing strategy is rare. Highly recommend for any growth-focused project.',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      role: 'CTO, InnovateLab',
      content: 'Outstanding technical skills combined with deep marketing knowledge. Delivered beyond our expectations.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-gradient"
            >
              Roberta Naa Adai Squire
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-gradient-subtle text-primary border-primary/20">
                Available for new projects
              </Badge>
              <h1 className="text-hero mb-6">
                <span className="text-gradient">AI-Powered</span> Digital Marketing & Web Development
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I help tech startups and digital agencies leverage AI tools and modern web technologies to solve real business problems and drive measurable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary group"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="btn-secondary"
                >
                  Let's Connect
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-hero rounded-2xl p-8 shadow-glow">
                <div className="grid grid-cols-2 gap-6 text-primary-foreground">
                  <div className="text-center">
                    <div className="text-3xl font-bold">45+</div>
                    <div className="text-sm opacity-80">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-80">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">3x</div>
                    <div className="text-sm opacity-80">Average ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24h</div>
                    <div className="text-sm opacity-80">Response Time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-20"
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-section mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a digital marketing professional with a passion for AI and modern web technologies. 
              My journey began in traditional marketing, but I quickly realized the transformative 
              power of combining marketing expertise with technical skills and AI tools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, I help businesses bridge the gap between marketing strategy and technical 
              implementation, creating solutions that not only look great but deliver measurable 
              results. My approach combines data-driven insights with creative problem-solving 
              to build tools and campaigns that truly move the needle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section mb-6">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A unique blend of marketing strategy, AI tools, and technical implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-elevated card-hover text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <skill.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-3">{skill.name}</h3>
                    <div className="w-full bg-secondary rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-center mb-8">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React', 'TypeScript', 'Python', 'TensorFlow', 'Node.js', 'PostgreSQL', 
                'AWS', 'Google Analytics', 'HubSpot', 'Figma', 'Tailwind CSS', 'Next.js'
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects that delivered measurable business results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-elevated card-hover overflow-hidden">
                  <div className="aspect-video bg-gradient-subtle relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Zap className="h-12 w-12 text-primary opacity-20" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-sm font-medium text-primary mb-2">Results:</div>
                      <div className="text-sm text-muted-foreground">{project.results}</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full">
                      Learn More
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section mb-6">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What colleagues and clients say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-elevated card-hover">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to leverage AI and modern web technologies for your next project? 
              Let's discuss how we can drive measurable results for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="card-elevated p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">Typically respond within 24 hours</p>
                  </div>
                </div>
                <a href="mailto:rhnas71@gmail.com" className="text-primary hover:underline">
                  rhnas71@gmail.com
                </a>
              </Card>

              <Card className="card-elevated p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">Available for consultations</p>
                  </div>
                </div>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </Card>

              <Card className="card-elevated p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Resume</h3>
                    <p className="text-sm text-muted-foreground">Full portfolio and references</p>
                  </div>
                </div>
                <a href="/resume.pdf" className="text-primary hover:underline" download>
                  Download Resume
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="card-elevated p-6">
                <form 
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Replace with your form handler
                    alert('Thanks for your message! I\'ll get back to you soon.');
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell me about your project, timeline, and goals..."
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl text-gradient mb-2">Roberta Naa Adai Squire</div>
              <p className="text-muted-foreground">AI-Powered Digital Marketing & Web Development</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:rhnas71@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Roberta Naa Adai Squire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;