import React, { useState, useEffect } from 'react';
import { projectAPI, skillAPI, contactAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: [],
    liveLink: '',
    githubLink: '',
    featured: false,
    name: '',
    category: 'frontend',
    icon: '',
    proficiency: 80,
  });

  // Check authentication - redirect if not logged in
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      // Handle unauthenticated state if needed
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (activeTab === 'projects') {
          const response = await projectAPI.getAll();
          setProjects(response.data);
        } else if (activeTab === 'skills') {
          const response = await skillAPI.getAll();
          setSkills(response.data);
        } else if (activeTab === 'messages') {
          const response = await contactAPI.getAll();
          setContacts(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'projects') {
        const response = await projectAPI.getAll();
        setProjects(response.data);
      } else if (activeTab === 'skills') {
        const response = await skillAPI.getAll();
        setSkills(response.data);
      } else if (activeTab === 'messages') {
        const response = await contactAPI.getAll();
        setContacts(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = '/';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTechnologiesChange = (e) => {
    const technologies = e.target.value.split(',').map(tech => tech.trim());
    setFormData({
      ...formData,
      technologies,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'projects') {
        if (editingItem) {
          await projectAPI.update(editingItem._id, formData);
        } else {
          await projectAPI.create(formData);
        }
      } else if (activeTab === 'skills') {
        if (editingItem) {
          await skillAPI.update(editingItem._id, formData);
        } else {
          await skillAPI.create(formData);
        }
      }
      setShowModal(false);
      setEditingItem(null);
      fetchData();
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    if (activeTab === 'projects') {
      setFormData({
        title: item.title || '',
        description: item.description || '',
        image: item.image || '',
        technologies: item.technologies || [],
        liveLink: item.liveLink || '',
        githubLink: item.githubLink || '',
        featured: item.featured || false,
      });
    } else if (activeTab === 'skills') {
      setFormData({
        name: item.name || '',
        category: item.category || 'frontend',
        icon: item.icon || '',
        proficiency: item.proficiency || 80,
      });
    }
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        if (activeTab === 'projects') {
          await projectAPI.delete(id);
        } else if (activeTab === 'skills') {
          await skillAPI.delete(id);
        } else if (activeTab === 'messages') {
          await contactAPI.delete(id);
        }
        fetchData();
      } catch (error) {
        console.error('Error deleting:', error);
      }
    }
  };

  const openAddModal = () => {
    setEditingItem(null);
    setFormData(
      activeTab === 'projects'
        ? { title: '', description: '', image: '', technologies: [], liveLink: '', githubLink: '', featured: false }
        : { name: '', category: 'frontend', icon: '', proficiency: 80 }
    );
    setShowModal(true);
  };

  const renderProjects = () => (
    <div className="dashboard-grid">
      {projects.map((project) => (
        <div key={project._id} className="dashboard-card">
          <img src={project.image} alt={project.title} className="card-image" />
          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card-tags">
              {project.technologies?.map((tech, idx) => (
                <span key={idx} className="tag">{tech}</span>
              ))}
            </div>
            <div className="card-actions">
              <button onClick={() => handleEdit(project)} className="btn-edit">Edit</button>
              <button onClick={() => handleDelete(project._id)} className="btn-delete">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="dashboard-grid">
      {skills.map((skill) => (
        <div key={skill._id} className="dashboard-card skill-card">
          <div className="skill-icon">
            <i className={skill.icon}></i>
          </div>
          <h3>{skill.name}</h3>
          <p>{skill.category}</p>
          <div className="skill-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.proficiency}%` }}></div>
            </div>
            <span>{skill.proficiency}%</span>
          </div>
          <div className="card-actions">
            <button onClick={() => handleEdit(skill)} className="btn-edit">Edit</button>
            <button onClick={() => handleDelete(skill._id)} className="btn-delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderMessages = () => (
    <div className="messages-list">
      {contacts.map((contact) => (
        <div key={contact._id} className={`message-card ${!contact.isRead ? 'unread' : ''}`}>
          <div className="message-header">
            <h3>{contact.name}</h3>
            <span className="message-email">{contact.email}</span>
          </div>
          <h4>{contact.subject}</h4>
          <p>{contact.message}</p>
          <div className="message-footer">
            <span className="message-date">{new Date(contact.createdAt).toLocaleDateString()}</span>
            <button onClick={() => handleDelete(contact._id)} className="btn-delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <i className="fas fa-project-diagram"></i>
            Projects
          </button>
          <button
            className={`nav-item ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <i className="fas fa-code"></i>
            Skills
          </button>
          <button
            className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <i className="fas fa-envelope"></i>
            Messages
          </button>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="btn-logout">
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          {activeTab !== 'messages' && (
            <button onClick={openAddModal} className="btn btn-primary">
              <i className="fas fa-plus"></i>
              Add New
            </button>
          )}
        </header>

        <div className="dashboard-content">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
              {activeTab === 'projects' && renderProjects()}
              {activeTab === 'skills' && renderSkills()}
              {activeTab === 'messages' && renderMessages()}
            </>
          )}
        </div>
      </main>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingItem ? 'Edit' : 'Add'} {activeTab === 'projects' ? 'Project' : 'Skill'}</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              {activeTab === 'projects' ? (
                <>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" name="image" value={formData.image} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Technologies (comma-separated)</label>
                    <input type="text" name="technologies" value={formData.technologies.join(', ')} onChange={handleTechnologiesChange} />
                  </div>
                  <div className="form-group">
                    <label>Live Link</label>
                    <input type="text" name="liveLink" value={formData.liveLink} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label>GitHub Link</label>
                    <input type="text" name="githubLink" value={formData.githubLink} onChange={handleInputChange} />
                  </div>
                  <div className="form-group checkbox">
                    <label>
                      <input type="checkbox" name="featured" checked={formData.featured} onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} />
                      Featured
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select name="category" value={formData.category} onChange={handleInputChange}>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                      <option value="tools">Tools</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Icon (FontAwesome class)</label>
                    <input type="text" name="icon" value={formData.icon} onChange={handleInputChange} placeholder="fab fa-react" required />
                  </div>
                  <div className="form-group">
                    <label>Proficiency (%)</label>
                    <input type="number" name="proficiency" value={formData.proficiency} onChange={handleInputChange} min="0" max="100" />
                  </div>
                </>
              )}
              <div className="modal-actions">
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
