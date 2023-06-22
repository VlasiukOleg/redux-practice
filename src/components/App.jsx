import React, { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { addMaterialToApi, getMaterials, deleteMaterials } from 'services/api';
import { Home } from 'pages/HomePage';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { ColorPickerPage } from 'pages/ColorPickerPage';
import { DropDownPage } from 'pages/DropDownPage';
import { FormModalPage } from 'pages/FormModalPage';
import { MaterialsPage } from 'pages/MaterialsPage';
import { UserFormPage } from 'pages/UserFormPage';
import { ToDosPage } from 'pages/ToDosPage';
import { ToDoDetails } from './ToDo/ToDoDetails';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  // const [filterQuery, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const toDoName = searchParams.get('filter') ?? '';

  const deleteToDo = toDoId => {
    setTodos(prevState => prevState.filter(todo => todo.id !== toDoId));
    Notify.failure('Delete Todo', {
      timeout: 1000,
      cssAnimationStyle: 'from-top',
    });
  };

  const addToDo = toDo => {
    setTodos(prevTodos => [toDo, ...prevTodos]);
    Notify.success('Add Todo', {
      timeout: 1000,
      cssAnimationStyle: 'from-top',
    });
  };

  const changeFilter = e => {
    const filterName = e.currentTarget.value;
    setSearchParams(filterName !== '' ? { filter: filterName } : {});
  };

  const toogleCompleted = toDoId => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === toDoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const formSubmitHadler = data => {
    console.log(data);
  };

  const toogleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const addMaterial = async values => {
    try {
      setIsLoading(true);
      const material = await addMaterialToApi(values);
      setMaterials(prevState => [...prevState, material]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  const deleteMaterial = async id => {
    await deleteMaterials(id);
    setMaterials(prevState => prevState.filter(material => material.id !== id));
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toogleModal();
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        setIsLoading(true);
        const materials = await getMaterials();
        setMaterials(materials);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchMaterials();
  }, []);

  const visibleToDo = todos.filter(todo =>
    todo.text.toLowerCase().includes(toDoName.toLowerCase())
  );

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="colorpicker" element={<ColorPickerPage />} />
        <Route path="dropdown" element={<DropDownPage />} />
        <Route
          path="modal"
          element={
            <FormModalPage
              showModal={showModal}
              onClose={toogleModal}
              handleBackdropClick={handleBackdropClick}
              toogleModal={toogleModal}
            />
          }
        />
        <Route
          path="materials"
          element={
            <MaterialsPage
              isLoading={isLoading}
              addMaterial={addMaterial}
              materials={materials}
              deleteMaterial={deleteMaterial}
              isError={isError}
            />
          }
        />
        <Route
          path="todos"
          element={
            <ToDosPage
              onAddToDo={addToDo}
              filter={toDoName}
              onChange={changeFilter}
              todos={visibleToDo}
              onDeleteToDo={deleteToDo}
              onToogleCompleted={toogleCompleted}
            />
          }
        />
        <Route path="todos/:todosId" element={<ToDoDetails todos={todos} />} />
        <Route
          path="userform"
          element={<UserFormPage onSubmit={formSubmitHadler} />}
        />
      </Route>
    </Routes>
  );
};

// <>
//   <Counter step={1} />
//   <ToDoEditor onAddToDo={addToDo} />
//   <ToDoFilter filter={filter} onChange={changeFilter} />
//   <ToDoList
//     todos={visibleToDo}
//     onDeleteToDo={deleteToDo}
//     onToogleCompleted={toogleCompleted}
//   />
//   <UserForm onSubmit={formSubmitHadler} />
//   <button type="button" onClick={toogleModal}>
//     Open Modal
//   </button>
//   {isError && (
//     <p>
//       Вибачте щось пішло не так перезавантежте будь ласка сторінку та
//       спробуйте ще
//     </p>
//   )}
//   {isLoading && <div>Завантажуємо матеріали</div>}
//   <MaterialEditorForm onSubmit={addMaterial} />
//   <MaterialsList materials={materials} onDeleteMaterial={deleteMaterial} />
//
// </>

// export class OldApp extends Component {
//   state = {
//     todos: [],
//     filter: '',
//     showModal: false,
//     materials: [],
//     isLoading: false,
//     isError: false,
//   };

//   deleteToDo = toDoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== toDoId),
//     }));
//     Notify.failure('Delete Todo', {
//       timeout: 1000,
//       cssAnimationStyle: 'from-top',
//     });
//   };

//   addToDo = toDo => {
//     this.setState(({ todos }) => ({
//       todos: [toDo, ...todos],
//     }));
//     Notify.success('Add Todo', {
//       timeout: 1000,
//       cssAnimationStyle: 'from-top',
//     });
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   toogleCompleted = toDoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.map(todo => {
//         if (todo.id === toDoId) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       }),
//     }));
//   };

//   formSubmitHadler = data => {
//     console.log(data);
//   };

//   toogleModal = () => {
//     this.setState(prevState => ({ showModal: !prevState.showModal }));
//   };

//   addMaterial = async values => {
//     try {
//       const material = await addMaterialToApi(values);
//       this.setState(prevState => ({
//         materials: [...prevState.materials, material],
//       }));
//     } catch (error) {
//       this.setState({ isError: true, isLoading: false });
//       console.log(error);
//     }
//   };

//   deleteMaterial = async id => {
//     await deleteMaterials(id);
//     this.setState(prevState => ({
//       materials: prevState.materials.filter(material => material.id !== id),
//     }));
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.toogleModal();
//     }
//   };

//   async componentDidMount() {
//     const todos = localStorage.getItem('todos');
//     const parseTodos = JSON.parse(todos);

//     if (parseTodos) {
//       this.setState({ todos: parseTodos });
//     }

//     try {
//       this.setState({ isLoading: true });
//       const materials = await getMaterials();
//       this.setState({ materials, isLoading: false });
//     } catch (error) {
//       this.setState({ isError: true, isLoading: false });
//       console.log(error);
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.todos !== prevState.todos) {
//       localStorage.setItem('todos', JSON.stringify(this.state.todos));
//     }
//   }

//   render() {
//     const { todos, filter, showModal, isLoading, materials, isError } =
//       this.state;

//     const visibleToDo = todos.filter(todo => todo.text.includes(filter));

//     return (
//       <>
//         {/* <Counter step={1} /> */}
//         <DropDown />
//         <ColorPicker colors={colors} />
//         <ToDoEditor onAddToDo={this.addToDo} />
//         <ToDoFilter filter={filter} onChange={this.changeFilter} />
//         <ToDoList
//           todos={visibleToDo}
//           onDeleteToDo={this.deleteToDo}
//           onToogleCompleted={this.toogleCompleted}
//         />
//         <UserForm onSubmit={this.formSubmitHadler} />
//         <button type="button" onClick={this.toogleModal}>
//           Open Modal
//         </button>
//         {isError && (
//           <p>
//             Вибачте щось пішло не так перезавантежте будь ласка сторінку та
//             спробуйте ще
//           </p>
//         )}
//         {isLoading && <div>Завантажуємо матеріали</div>}
//         <MaterialEditorForm onSubmit={this.addMaterial} />
//         <MaterialsList
//           materials={materials}
//           onDeleteMaterial={this.deleteMaterial}
//         />
//         {this.state.showModal && (
//           <BackdropModal
//             showModal={showModal}
//             onClose={this.toogleModal}
//             handleBackdropClick={this.handleBackdropClick}
//           >
//             <h1>Title as children modal</h1>
//           </BackdropModal>
//         )}
//       </>
//     );
//   }
// }
