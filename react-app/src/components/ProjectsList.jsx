import React from 'react';
import api from '../api';

const ProjectsList = props => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const retrievedProjects = await api.service('projects').find();
      setProjects(retrievedProjects.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project => {
        return <p key={project.id}>{project.name}</p>;
      })}
    </div>
  );
};

export default ProjectsList;
