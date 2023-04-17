import { Text } from 'components';
import { Answers } from 'redux/types';
import { PageConfigType } from 'utils/types';

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const getDynamicQuestions = (answers: Answers): PageConfigType[] => {
  if (answers.relationshipStatus === 'single')
    return [
      {
        question: 'Are you a single parent?',
        fields: [
          {
            type: 'button',
            placeholder: 'Yes',
            value: true,
            name: 'isSingleParent',
            autocomplete: true
          },
          {
            type: 'button',
            placeholder: 'No',
            value: false,
            name: 'isSingleParent',
            autocomplete: true
          }
        ]
      },
      {
        question: `Single ${answers.gender} ${answers.age} ${
          answers.isSingleParent ? 'who have children' : ''
        } need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`,
        fields: [
          {
            type: 'button',
            placeholder: 'I was unhappy with low things were going in my relationship',
            value: 'I was unhappy with low things were going in my relationship',
            name: 'feelingsInLastRelations',
            autocomplete: true
          },
          {
            type: 'button',
            placeholder: 'I was unhappy with parts of my relationship, but some thing were working',
            value: 'I was unhappy with parts of my relationship, but some thing were working',
            name: 'feelingsInLastRelations',
            autocomplete: true
          },
          {
            type: 'button',
            placeholder: 'I was generally happy with my relationship',
            value: 'I was generally happy with my relationship',
            name: 'feelingsInLastRelations',
            autocomplete: true
          },
          {
            type: 'button',
            placeholder: 'I’ve never been in a relationship',
            value: 'I’ve never been in a relationship',
            name: 'feelingsInLastRelations',
            autocomplete: true
          }
        ]
      }
    ];

  return [
    {
      question: 'Are you a parent?',
      fields: [
        {
          type: 'button',
          placeholder: 'Yes',
          value: true,
          name: 'isParent',
          autocomplete: true
        },
        {
          type: 'button',
          placeholder: 'No',
          value: false,
          name: 'isParent',
          autocomplete: true
        }
      ]
    },
    {
      question: `${capitalize(answers.gender || 'male')} ${answers.age} ${
        answers.isParent ? 'who have children' : ''
      } need a slightly different approach to improve their relationship. Which statement best describes you?`,
      fields: [
        {
          type: 'button',
          placeholder: 'I’m very unhappy with how things are going in my relationship',
          value: 'I’m very unhappy with how things are going in my relationship',
          name: 'describingStatement',
          autocomplete: true
        },
        {
          type: 'button',
          placeholder:
            'I’m unhappy with parts of my relationship, but some things are working well',
          value: 'I’m unhappy with parts of my relationship, but some things are working well',
          name: 'describingStatement',
          autocomplete: true
        },
        {
          type: 'button',
          placeholder: 'I’m generally happy in my relationship',
          value: 'I’m generally happy in my relationship',
          name: 'describingStatement',
          autocomplete: true
        }
      ]
    }
  ];
};

export const getPageConfigs = (answers: Answers): PageConfigType[] => [
  {
    question: 'Select your gender:',
    fields: [
      {
        type: 'button',
        placeholder: 'Female',
        value: 'female',
        name: 'gender',
        autocomplete: true
      },
      {
        type: 'button',
        placeholder: 'Male',
        value: 'male',
        name: 'gender',
        autocomplete: true
      }
    ]
  },
  {
    question: 'What’s your date of birth?',
    fields: [
      {
        type: 'dropdown',
        placeholder: 'Day',
        name: 'dateOfBirth.day',
        value: 'day',
        options: [
          { value: 'day', placeholder: 'Day' },
          ...Array.from({ length: 31 }, (_, i) => ({
            value: `${i + 1}`,
            placeholder: `${i + 1}`
          }))
        ],
        validation: ['required']
      },
      {
        type: 'dropdown',
        placeholder: 'Month',
        name: 'dateOfBirth.month',
        value: 'month',
        options: [
          { value: 'month', placeholder: 'Month' },
          { value: 'january', placeholder: 'January' },
          { value: 'february', placeholder: 'February' },
          { value: 'march', placeholder: 'March' },
          { value: 'april', placeholder: 'April' },
          { value: 'may', placeholder: 'May' },
          { value: 'june', placeholder: 'June' },
          { value: 'july', placeholder: 'July' },
          { value: 'august', placeholder: 'August' },
          { value: 'september', placeholder: 'September' },
          { value: 'october', placeholder: 'October' },
          { value: 'november', placeholder: 'November' },
          { value: 'december', placeholder: 'December' }
        ],
        validation: ['required']
      },
      {
        type: 'dropdown',
        placeholder: 'Year',
        name: 'dateOfBirth.year',
        value: 'year',
        options: [
          { value: 'year', placeholder: 'Year' },
          ...Array.from({ length: 50 }, (_, i) => {
            const year = new Date().getFullYear() - i;

            return { value: year, placeholder: `${year}` };
          })
        ],
        validation: ['required']
      },
      {
        type: 'button',
        placeholder: 'Next',
        value: '',
        active: true
      }
    ]
  },
  {
    question: 'So we can get to know you better, tell us about your relationship status.',
    fields: [
      {
        type: 'button',
        placeholder: 'Single',
        value: 'single',
        name: 'relationshipStatus',
        autocomplete: true
      },
      {
        type: 'button',
        placeholder: 'In a relationship',
        value: 'inRelationship',
        name: 'relationshipStatus',
        autocomplete: true
      }
    ]
  },
  ...getDynamicQuestions(answers),
  {
    question: 'Do you make decisions with your head or your heart?',
    fields: [
      {
        type: 'button',
        placeholder: 'Heart',
        value: 'heart',
        name: 'makingDecisions',
        autocomplete: true
      },
      {
        type: 'button',
        placeholder: 'Head',
        value: 'head',
        name: 'makingDecisions',
        autocomplete: true
      },
      {
        type: 'button',
        placeholder: 'Both',
        value: 'both',
        name: 'makingDecisions',
        autocomplete: true
      }
    ]
  },
  { question: '', fields: [] },
  {
    question: (
      <Text weight={700} color="#333333" style={{ textAlign: 'center' }}>
        Enter your email to see how you can grow with Nebula
      </Text>
    ),
    fields: [
      {
        type: 'input',
        placeholder: 'Your email',
        value: '',
        name: 'email',
        validation: ['required', 'email']
      },
      {
        type: 'customJSX',
        placeholder: '',
        value: '',
        jsx: (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20
            }}>
            <Text size={12} color="#343434">
              *Nebula does not share any personal information. We’ll email you a copy of your
              program for convenient access.
            </Text>
            <Text size={12} weight={600} color="#4E4E4E">
              By continuing I agree with{' '}
              <a style={{ fontSize: 12, color: '#8E8CF0', textDecoration: 'none' }} href="#">
                Privacy policy
              </a>{' '}
              and{' '}
              <a style={{ fontSize: 12, color: '#8E8CF0', textDecoration: 'none' }} href="#">
                Terms of use
              </a>
              .
            </Text>
          </div>
        )
      },
      {
        type: 'button',
        placeholder: 'Continue',
        value: '',
        active: true
      }
    ]
  }
];

export const allFields = getPageConfigs({}).flatMap((config) => config.fields);
