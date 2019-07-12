import React from 'react';
import axios from '../axios';

const ProjectsList = props => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/projects');
      setProjects(response.data);
    }

    fetchData();
  }, [])
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project => {
        return <p key={project.id}>{project.name}</p>
      })}
    </div>
  );
};

export default ProjectsList;
