import { example, ProjectType } from '@/types';
import Modal from './Modal';
import { ReactNode, useEffect, useState } from 'react';

interface ModalProjectDetailsProps {
  selectedProject: ProjectType | null;
  setSelectedProject: (project: null) => void;
}

const ModalProjectDetails = ({
  selectedProject,
  setSelectedProject,
}: ModalProjectDetailsProps) => {
  console.log('ModalProjectDetails :>> ', selectedProject);
  const [index, setIndex] = useState(0);

  const examplesLength = selectedProject?.examples?.length || 0;
  const currentExample: example | ReactNode =
    selectedProject?.examples && selectedProject.examples[index]
      ? selectedProject.examples[index]
      : null;

  useEffect(() => {
    if (selectedProject === null) setIndex(0);
  }, [selectedProject]);

  console.log(
    'currentExample :>> ',
    index,
    examplesLength,
    selectedProject?.examples,
    selectedProject?.examples?.[index],
    currentExample,
  );
  const currentElement = currentExample ? (
    currentExample.type === 'PHOTO' ? (
      <img
        src={currentExample.content}
        alt={currentExample?.description || 'image project'}
        className="project-detail-image"
        // style={{
        //   maxWidth: '100%',
        //   maxHeight: '100%', // La imagen no superará a su padre
        //   objectFit: 'contain', // Mantiene la proporción sin recortar
        //   display: 'block', // Elimina espacios fantasma debajo de la imagen
        // }}
      />
    ) : (
      <video
        src={currentExample.content}
        autoPlay
        width={'100%'}
        height={'100%'}
      ></video>
    )
  ) : (
    <div>No hay datos</div>
  );

  const prev = () => {
    setIndex((prev) => (prev - 1 + examplesLength) % examplesLength);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % examplesLength);
  };

  return (
    <Modal
      title={`${selectedProject?.title} ( ${index + 1} / ${examplesLength} )`}
      open={selectedProject !== null}
      onClose={() => {
        setSelectedProject(null);
      }}
    >
      <div className="project-detail-container">
        <button
          className="project-detail-button"
          aria-label="Imagen anterior"
          onClick={prev}
        >
          {'<'}
        </button>
        <div className="project-detail-image-wrapper">{currentElement}</div>
        <button
          className="project-detail-button"
          aria-label="Imagen siguiente"
          onClick={next}
        >
          {'>'}
        </button>
      </div>
    </Modal>
  );
};

export default ModalProjectDetails;
