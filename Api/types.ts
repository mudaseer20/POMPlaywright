export interface LoginResponse {
  user: {
   // email: string;
    token: string;
   // username: string;
  };
}

export interface ArticlePayload {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface ArticleResponse {
  article: ArticlePayload & {
    slug: string;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: string | null;
      image: string;
      following: boolean;
    };
  };
}
