import {ADD_NEWS, EDIT_NEWS, LOAD_NEWS, REMOVE_NEWS} from "./newsActions";
import {Article} from "../entities/Article";
import {
    ADD_COMMENT,
    ADD_COMPLAIN,
    ADD_TO_FAVORITE,
    ADD_TO_READ_LATER,
    MARK_AS_READ,
    RATE_ARTICLE
} from "./articleActions";

const loadNews = (): NewsActionType => {
    return {
        type: LOAD_NEWS
    }
};

const addNews = (article: Article): NewsActionType => {
    return {
        type: ADD_NEWS,
        article
    }
};

const removeNews = (id: string): NewsActionType => {
    return {
        type: REMOVE_NEWS,
        id
    }
};

const editNews = (article: Article): NewsActionType => {
    return {
        type: EDIT_NEWS,
        article
    }
};

const marAsRead = (id: string): ArticleActionType => {
    return {
        type: MARK_AS_READ,
        id
    }
};

const addToFavorite = (id: string): ArticleActionType => {
    return {
        type: ADD_TO_FAVORITE,
        id
    }
};

const addToReadLater = (id: string): ArticleActionType => {
    return {
        type: ADD_TO_READ_LATER,
        id
    }
};

const rateArticle = (id: string, rate: number): ArticleActionType => {
    return {
        type: RATE_ARTICLE,
        id,
        rate
    }
};

const addComment = (id: string, comment: string): ArticleActionType => {
    return {
        type: ADD_COMMENT,
        id,
        comment
    }
};
const addComplain = (id: string, complain: string): ArticleActionType => {
    return {
        type: ADD_COMPLAIN,
        id,
        complain
    }
};



export interface ActionTypeBase {
    type: string;
}

export interface NewsActionType extends ActionTypeBase{
    id?: string;
    article?: Article;
}

export interface ArticleActionType extends ActionTypeBase{
    id?: string;
    comment?: string;
    complain?: string;
    rate?: number;
}
