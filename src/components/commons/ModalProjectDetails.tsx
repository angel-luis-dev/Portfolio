import { example, ProjectType } from '@/types';
import Modal from './Modal';
import { ReactNode, useState } from 'react';

interface ModalProjectDetailsProps {
  selectedProject: ProjectType | null;
  setSelectedProject: (project: null) => void;
}

const stylesButtons = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: 28,
};

const ModalProjectDetails = ({
  selectedProject,
  setSelectedProject,
}: ModalProjectDetailsProps) => {
  console.log('ModalProjectDetails :>> ', selectedProject);
  const [index, setIndex] = useState(0);

  const currentExample: example | ReactNode =
    selectedProject?.examples && selectedProject.examples[index]
      ? selectedProject.examples[index]
      : null;

  console.log(
    'currentExample :>> ',
    index,
    selectedProject?.examples,
    selectedProject?.examples?.[index],
    currentExample,
  );
  const currentElement = currentExample ? (
    currentExample.type === 'PHOTO' ? (
      <img
        src={currentExample.content}
        style={{
          width: 'calc(100% - 60px)',
          objectFit: 'contain',
        }}
      />
    ) : (
      <h1>No</h1>
    )
  ) : (
    <div>No hay datos</div>
  );

  const examplesLength = selectedProject?.examples?.length || 0;

  const prev = () => {
    setIndex((prev) => (prev - 1 + examplesLength) % examplesLength);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % examplesLength);
  };

  return (
    <Modal
      title={'Project'}
      open={selectedProject !== null}
      onClose={() => {
        setSelectedProject(null);
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'stretch',
          gap: 4,
          height: '-webkit-fill-available',
        }}
      >
        <button style={stylesButtons} onClick={prev}>
          {'<'}
        </button>
        {currentElement}
        <button style={stylesButtons} onClick={next}>
          {'>'}
        </button>
      </div>
    </Modal>
  );
};

export default ModalProjectDetails;
