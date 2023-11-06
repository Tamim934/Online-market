import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const Api = "http://localhost:3000/api/products";
const CartApi = "http://localhost:3000/api/orders";

// export const GetData = createAsyncThunk("todos/GetData", async () => {
//   try {
//     const { data } = await axios.get(api);
//     return data;
//   } catch (error) {}
// });
// export const AddData = createAsyncThunk(
//   "todos/AddData",
//   async (text, { dispatch }) => {
//     try {
//       const { data } = await axios.post(api, {
//         text: text,
//         isCompleted: false,
//       });
//       dispatch(GetData());
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );
// export const DelData = createAsyncThunk(
//   "todos/DelData",
//   async (id, { dispatch }) => {
//     console.log(id);
//     try {
//       const { data } = await axios.delete(`${api}/${id}`);
//       dispatch(GetData());
//       return data;
//     } catch (error) {}
//   }
// );
// export const DoneData = createAsyncThunk(
//   "todos/DoneData",
//   async (e, { dispatch }) => {
//     console.log(e);
//     try {
//       const { data } = await axios.put(`${api}/${e.id}`, {
//         text: e.text,
//         isCompleted: !e.isCompleted,
//       });
//       dispatch(GetData());
//     } catch (error) {}
//   }
// );
// export const EditData = createAsyncThunk(
//   "todos/EditData",
//   async (user, { dispatch }) => {
//     console.log(user);
//     try {
//       const { data } = await axios.put(`${api}/${user.id}`, user);
//       dispatch(GetData());
//     } catch (error) {}
//   }
// );
export const GetProducts = createAsyncThunk(
  "Products/GetProducts",
  async () => {
    try {
      const { data } = await axios.get(Api);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const GetCart = createAsyncThunk("cartObj/GetCart", async () => {
  try {
    const { data } = await axios.get(CartApi);
    return data;
  } catch (error) {
    console.error(error);
  }
});
export const AddToCart = createAsyncThunk(
  "cartObj/AddToCart",
  async (e, { dispatch }) => {
    try {
      const { data } = await axios.post(CartApi, e);
      dispatch(GetCart());
    } catch (error) {
      console.error(error);
    }
  }
);
export const onlineShop = createSlice({
  name: "Products",
  initialState: {
    Products: [],
    isloading: false,
    cartObj: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cartObj.push(action.payload);
      console.log(obj);
    },
    deleteTodo(state, action) {
      let del = state.todos.filter((e) => {
        return e.id != action.payload;
      });
      state.todos = del;
    },
    handleChange: (state, action) => {
      // console.log(action.payload);

      state[action.payload.type] = action.payload.answer;
    },
    completedTodo: (state, action) => {
      state.todos = state.todos.map((e) => {
        if (action.payload.id == e.id) {
          e.completed = action.payload.check;
        }
        return e;
      });
    },

    editTodo(state, action) {
      console.log(action);
      state.todos = state.todos.map((e) => {
        if (e.id == action.payload.id) {
          e.title = action.payload.editText;
        }

        return e;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(GetProducts.pending, (state, action) => {});
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      // state.isloading = false;
      state.Products = action.payload;
    });
    // builder.addCase(GetCart.pending, (state, action) => {
    //   console.log(123123);
    // });
    // builder.addCase(GetCart.fulfilled, (state, action) => {
    //   state.cartObj = action.payload;
    // });
    // builder.addCase(AddToCart.fulfilled, (state, action) => {

    // });
    // builder.addCase(GetData.pending, (state, action) => {
    //   state.isloading = true;
    // });
    // builder.addCase(GetData.fulfilled, (state, action) => {
    //   state.isloading = false;
    //   state.todos = action.payload;
    // });
    // builder.addCase(GetData.rejected, (state, action) => {
    //   console.log("das");
    // });
    // builder.addCase(DelData.pending, (state, action) => {
    //   console.log(action);
    // });
    // builder.addCase(DelData.fulfilled, (state, action) => {
    //   console.log(action);
    // });
    // builder.addCase(AddData.fulfilled, (state, action) => {
    //   console.log(action);
    //   state.todos = action.payload;
    // });
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, completedTodo, editTodo } =
  onlineShop.actions;
export default onlineShop.reducer;
