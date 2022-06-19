import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import MainPageLogin from "./page/MainPageLogin";
import RegisterPage from "./page/RegisterPage"
import MyPage from "./page/MyPage"
import WritePage from "./page/WritePage"
import EditPage from "./page/EditPage";
import CategoryPage from "./page/CategoryPage";

function App() {
    return (
        <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/user/login" element={<LoginPage/>}/>
                    <Route exact path="/users/register" element={<RegisterPage/>}/>
                    <Route exact path="/user" element={<MyPage/>}/>
                    <Route exact path="/boards" element={<WritePage/>}/>
                    <Route exact path="/user/edit" element={<EditPage/>}/>
                    <Route exact path="/boards/:category" element={<CategoryPage/>}/>
        </Routes>
    );
}
export default App;