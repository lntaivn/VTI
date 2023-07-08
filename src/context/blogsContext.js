import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/blogsReducer";
import {
  GET_BLOG_BEGIN,
  GET_BLOG_ERROR,
  GET_BLOG_ERROR,
  GET_SINGLE_BLOG_BEGIN,
  GET_SINGLE_BLOG_ERROR,
  GET_SINGLE_BLOG_ERROR,
  GET_BLOG_BY_SEARCHTERM_BEGIN,
  GET_BLOG_BY_SEARCHTERM_SUCCESS,
  GET_BLOG_BY_SEARCHTERM_ERROR,
  GET_BLOG_BY_SEARCHTERM_BEGIN,
  GET_BLOG_BY_SEARCHTERM_ERROR,
  GET_BLOG_BY_SEARCHTERM_SUCCESS,
  SET_SEARCH_TERM,
  GET_BLOG_SUCCESS,
  GET_SINGLE_BLOG_SUCCESS,
} from "../utils/constants";