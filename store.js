import { configureStore } from "@reduxjs/toolkit";

import { templateSlice } from "./slices/template";

export default configureStore({
  reducer: { template: templateSlice.reducer },
});
