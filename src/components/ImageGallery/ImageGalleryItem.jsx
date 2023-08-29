import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { useState } from 'react';
import css from './ImageGallery.module.css';

export function ImageGalleryItem({ el }) {
  const [showModal, setShowModal] = useState(false);

  const { webformatURL, largeImageURL, tags } = el;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li className={css.ImageGalleryItem} onClick={toggleModal}>
        <img className={css.ImageGalleryImage} src={webformatURL} alt={tags} />
      </li>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
}

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { webformatURL, largeImageURL, tags } = this.props.el;
//     return (
//       <>
//         <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
//           <img
//             className={css.ImageGalleryImage}
//             src={webformatURL}
//             alt={tags}
//           />
//         </li>
//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
