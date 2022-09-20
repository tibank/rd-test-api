import { Note } from 'src/notes/entities/note.entity';

export const notesMocked: Note[] = [
  {
    id: 1,
    name: 'Homework',
    created: new Date(2022, 3, 10),
    category: { id: 1, name: 'Task' },
    content: 'I have to do homework till  15/04/2022',
    archived: false,
  },
  {
    id: 2,
    name: 'About main',
    created: new Date(2022, 3, 10),
    category: { id: 3, name: 'Random Thought' },
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    archived: false,
  },
  {
    id: 3,
    name: 'Take book',
    created: new Date(2022, 3, 11),
    category: { id: 1, name: 'Task' },
    content: 'I have to pick up the book from John tomorrow',
    archived: false,
  },
  {
    id: 4,
    name: 'Wash car',
    created: new Date(2022, 3, 12),
    category: { id: 1, name: 'Task' },
    content: 'I have to wash my car tommorow 13/04/2022',
    archived: false,
  },
  {
    id: 5,
    name: 'New travel',
    created: new Date(2022, 4, 1),
    category: { id: 2, name: 'Idea' },
    content: 'Maybe I should take a trip to a new place',
    archived: false,
  },
  {
    id: 6,
    name: 'Go to dentist',
    created: new Date(2022, 3, 12),
    category: { id: 1, name: 'Task' },
    content:
      'I’m gonna have a dentist appointment on the 13/04/2022. I moved it from 16/04/2022',
    archived: false,
  },
  {
    id: 7,
    name: 'The weather',
    created: new Date(2022, 3, 12),
    category: { id: 3, name: 'Random Thought' },
    content: 'The weather is cold 12/04/2022',
    archived: true,
  },
];
