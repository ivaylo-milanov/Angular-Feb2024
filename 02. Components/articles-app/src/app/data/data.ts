import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { data } from './seed';

@Injectable({
  providedIn: 'root'
})
export class ArticleData {
  getData(): Article[] {
    let articles: Article[] = [];

    for (let article of data) {
      articles.push(
        new Article(
          article.title,
          article.description,
          article.author,
          article.imageUrl
        )
      );
    }

    return articles;
  }
}
