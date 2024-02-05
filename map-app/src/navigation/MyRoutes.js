import { Routes, Route } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import SpacesListWithSearch from '../spaces/SpacesListWithSearch';
import SpaceDetail from '../spaces/SpaceDetail';
import UsersList from '../users/UsersList';
import UserDetail from '../users/UserDetail';
import UserCommentsList from '../comments/UserCommentsList';
import SpaceCommentsList from '../comments/SpaceCommentsList';
import Home from '../homepage/Home';
import CategoriesList from '../categories/CategoriesList';
import CategorySpaces from '../categories/CategorySpaces';
import SignupForm from '../forms/SignUpForm';
import AdminRoute from '../navigation/AdminRoute';
import SpaceForm from '../forms/SpaceForm'
import LocationsList from '../locations/LocationsList';
import LocationDetailWithSpaces from '../locations/LocationDetailWithSpaces';
import CategoryEdit from '../categories/CategoryEdit';
import CategoryForm from '../forms/CategoryForm';
import SpaceEdit from '../spaces/SpaceEdit';
import UserEdit from '../users/UserEdit';
import LocationForm from '../forms/LocationForm';
import LocationEdit from '../locations/LocationEdit';
import CommentForm from '../forms/CommentForm';
import CommentEdit from '../comments/CommentEdit'
import RatingForm from '../forms/RatingForm';
import RatingAvg from '../ratings/RatingsAvg';
import RatingEdit from '../ratings/RatingEdit';
import UserSpacesList from '../users/UserSpacesList';
import Map from '../map/Map';

const MyRoutes = ({login, signup, remove, update, create})=>{

    return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignupForm signup={signup}/>}/>
      <Route path="/spaces" element={<SpacesListWithSearch remove={remove}/>} />
      <Route path="/spaces/:title" element={<SpaceDetail remove={remove}/> } />
      <Route path="/users/:username" element={<UserDetail/> } />
      <Route path="/comments/users/:username" element={<UserCommentsList/>} />
      <Route path="/users/:username/spaces" element={<UserSpacesList remove={remove} />}/>
      <Route path="/comments/spaces/:title" element={<SpaceCommentsList/>} />
      <Route path="/categories" element={<CategoriesList/>} />
      <Route path ="/categories/:cat_type" element={<CategorySpaces />}/>
      <Route path ="/users/:username/edit" element={<UserEdit update={update} remove={remove} />}/>
      <Route path="/locations" element={<LocationsList/>} />
      <Route path="/comments/:username/spaces/:title/new" element={<CommentForm/>} />
      <Route path="/comments/:comment_id/edit" element={<CommentEdit update={update} remove={remove}/>} />
      <Route path="/ratings/:username/spaces/:title/new" element={<RatingForm/>} />
      <Route path="/comments/:comment_id/edit" element={<CommentEdit update={update} remove={remove}/>} />
      <Route path="/ratings/spaces/:title" element={<RatingAvg/>} />
      <Route path="/ratings/:rating_id/edit" element={<RatingEdit update={update} remove={remove}/>}/>
      <Route path="/map/:title" element={<Map />} />

      
      <Route path="/locations/spaces/:city/:neighborhood" element={<LocationDetailWithSpaces/>}/>
      <Route path ="/categories/:cat_type/edit" element={<AdminRoute element={<CategoryEdit update={update} remove={remove}/>}/>}/>
      <Route path ="/categories/new" element={<AdminRoute element={<CategoryForm create={create}/>}/>}/>
      <Route path="/users" element={<AdminRoute element={<UsersList />}/>}/>
      <Route path="/spaces/:title/edit" element={<AdminRoute element={<SpaceEdit update={update} remove={remove}/>}/>}/>
      <Route path="/spaces/new" element={<AdminRoute element={<SpaceForm create={create}/>}/>}/>
      <Route path="/locations/new" element={<AdminRoute element={<LocationForm create={create}/>}/>}/>
      <Route path="/locations/:city/:neighborhood/edit" element={<AdminRoute element={<LocationEdit update={update} remove={remove}/>}/>}/>

      </Routes>
    );

};

export default MyRoutes;

