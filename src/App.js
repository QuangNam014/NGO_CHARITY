import { Fragment } from 'react';

import { Header, Footer, ContentPage } from './user';





function App() {
  return (
    <Fragment>
            {/* Loader sẽ làm sau cùng */}
            {/* <div className="spinner-border text-muted"></div> */}    

            {/* Header begin */}
                <Header />
            {/* Header end */}

            {/* Content begin */}
                <ContentPage />
            {/* Content end */}
                
            {/* Footer begin */}
                <Footer />
            {/* Footer begin */}

      </Fragment>
  );
}

export default App;
