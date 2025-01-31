import { CharacterType } from '@types';
import { Component } from 'react';

type CardProps = CharacterType;

class Card extends Component<CardProps> {
  render() {
    const { id, name, image } = this.props;

    return (
      <div
        key={id}
        className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <img className="w-full" src={image} alt={name} />
        <div className="px-6 py-4 text-center">
          <span className="mb-2 text-lg font-bold text-slate-700">{name}</span>
        </div>
      </div>
    );
  }
}

export default Card;
