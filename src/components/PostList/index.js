import React, { Component } from 'react';

import Post from '../Post/index';
import './styles.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
        },
        date: '12 jun 2020',
        content: 'galera, alguém sabe como começar a programar?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Marcos Mendes',
              avatar: 'https://avatars2.githubusercontent.com/u/20197183?s=100&v=4'
            },
            content: ' A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Maria bank',
          avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
        },
        date: '13 jun 2020',
        content: 'Tem dia que bate uma bad.... :(',
        comments: [
          {
            id: 2,
            author: {
              name: 'John MC',
              avatar: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60'
            },
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, autem corrupti adipisci nobis quibusdam' 
          },
          {
            id: 3,
            author: {
              name: 'Patrícia P',
              avatar: 'https://images.unsplash.com/photo-1516826711647-4c4df2849301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },
            content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, autem corrupti adipisci nobis quibusdam' 
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
        },
        date: '13 jun 2020',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo dolorem aperiam maiores ex! Accusamus iure exercitationem, blanditiis dolorem, pariatur labore numquam rerum repellat ea, eos cumque inventore itaque necessitatibus totam.,',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara L.',
              avatar: 'https://images.unsplash.com/photo-1547093841-7c02540c29e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60'
            },
            content: ' A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      }
    ]
  }

  render() {
    return (

      <div className="postlist">
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    );
  }
}

export default PostList;