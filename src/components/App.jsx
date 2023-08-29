import {useState } from 'react';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export function App () {
  
  const [searchText, setSearchText] = useState('');
  const [queryCurrentPage, setQueryCurrentPage] = useState(1);
  
 

  const handleSearchbar = searchText => {
    setSearchText(searchText);
  };

  
    return (
      <div className={css.App}>
        <Searchbar onSubmit={handleSearchbar} />
        <ImageGallery searchText={searchText} queryCurrentPage={queryCurrentPage} />
      </div>
    );
  }

// export class App extends Component {
//   state = {
//     searchText: '',
//     currentPage: 1
    
//   };

//   handleSearchbar = searchText => {
//     this.setState({ searchText });
//   };

//   render() {
//     return (
//       <div className={css.App}>
//         <Searchbar onSubmit={this.handleSearchbar} />
//         <ImageGallery searchText={this.state.searchText} currentPage={this.state.currentPage} />
//       </div>
//     );
//   }
// }
