
import css from './SearchForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function Searchbar ({onSubmit}) {
  
  const [value, setValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  

  const handleChange = event => {
    setValue(event.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    

    if (value.trim() === '') {
      alert('Empty input, please enter search word');
      return;
    }
    onSubmit(value, currentPage);
    setValue('');
    setCurrentPage(1)
  };

  
    return (
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={css.SearchButton}>
              <span className={css.SearchLabel}>Search</span>
            </button>

            <input
              className={css.SearchInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={handleChange}
              value={value}
            />
          </form>
        </header>
      </>
    );
  }


Searchbar.propTypes ={
  onSubmit:PropTypes.func.isRequired,
}

// export class Searchbar extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = ({ target }) => {
//     this.setState({ value: target.value.toLowerCase()});
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.value);

//     if (this.state.value.trim() === '') {
//       alert('Empty input, please enter search word');
//       return;
//     }
//     this.props.onSubmit(this.state.value);
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <>
//         <header className={css.Searchbar}>
//           <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//             <button type="submit" className={css.SearchButton}>
//               <span className={css.SearchLabel}>Search</span>
//             </button>

//             <input
//               className={css.SearchInput}
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               onChange={this.handleChange}
//               value={this.state.value}
//             />
//           </form>
//         </header>
//       </>
//     );
//   }
// }