import React from 'react';
import HomePage from './HomePage';
import AboutPage from './About';
import Header from './common/Header';
import Courses from './CoursesPage'

function App() {

    function getPage() {
        const route = window.location.pathname;
        if (route === "/courses") return <Courses></Courses>
        if (route === "/about") return <AboutPage></AboutPage>
        return <HomePage></HomePage>
    }

    return (
        <div className="container-fluid">
            <Header />
            {getPage()}
        </div>
    )
}

export default App;