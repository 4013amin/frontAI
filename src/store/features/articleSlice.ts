import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IArticle } from "@/types/globa_types"

interface ArticleState {
  createdArticle: IArticle | null
  selectedArticleTitle: string
}

const initialState: ArticleState = {
  createdArticle: null,
  selectedArticleTitle: ""
}

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {

    setCreatedArticle: (state, action: PayloadAction<IArticle>) => {
      state.createdArticle = action.payload
    },

    clearCreatedArticle: state => {
      state.createdArticle = null
    },

    setSelectedArticleTitle: (state, action: PayloadAction<string>) => {
      state.selectedArticleTitle = action.payload
    },

    clearSelectedArticleTitle: state => {
      state.selectedArticleTitle = ""
    }
  }
})

export const {
  setCreatedArticle,
  clearCreatedArticle,
  setSelectedArticleTitle,
  clearSelectedArticleTitle
} = articleSlice.actions

export default articleSlice.reducer