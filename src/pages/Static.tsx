import TableContent from '../components/Table/TableContent';

function Static() {
  const head = ['slug', 'category', 'required', 'title', 'status', 'action'];

  // const USER_TOKEN = localStorage.getItem('accessToken');

  // const [body, setBody] = useState([]);
  // const AuthStr = 'Bearer ' + USER_TOKEN;

  // useEffect(() => {
  //   axios
  //     .get('https://dev-api.nurture.vinova.sg/api/v1/admins/static-content', {
  //       headers: { Authorization: AuthStr },
  //     })
  //     .then((response) => setBody(response.data.data))
  //     .catch((err) => console.log(err));
  //   // console.log(1);
  // }, [AuthStr]);

  // console.log(body);

  const body = [
    {
      id: 'dbf9ea93-5372-487c-8c60-50d071fa518c',
      slug: 'term-2',
      category: 'Term',
      title: 'Term 2',
      content: '<p>121212</p>',
      status: 'Hide',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T16:12:33.235Z',
      updatedAt: '2024-05-30T01:35:08.595Z',
      deletedAt: null,
    },
    {
      id: 'b3061453-7e29-4596-bf95-9d95884a4f9d',
      slug: 'term-735',
      category: 'Term',
      title: 'Term',
      content: '<p>123123</p>',
      status: 'Show',
      isRequired: true,
      hasContent: true,
      createdAt: '2024-05-30T01:35:45.799Z',
      updatedAt: '2024-05-30T01:35:45.799Z',
      deletedAt: null,
    },
    {
      id: '80b82549-e655-491a-b560-7b9f2c9c9acc',
      slug: 'payment-policy',
      category: 'Privacy & Security',
      title: 'Payment policy',
      content: '<p>1212 1221 12 12</p>',
      status: 'Hide',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T07:28:01.032Z',
      updatedAt: '2024-05-30T01:29:26.722Z',
      deletedAt: null,
    },
    {
      id: 'e26623de-7b25-43b1-8927-966d75e31267',
      slug: 'term',
      category: 'Term',
      title: 'Term',
      content: '<p>Term 2</p>',
      status: 'Show',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T09:09:26.883Z',
      updatedAt: '2024-05-30T01:34:38.614Z',
      deletedAt: null,
    },
    {
      id: '050282ff-8230-44c9-8afa-e4fa3e5d1597',
      slug: 'test-1-2',
      category: 'Term',
      title: 'test-1-2',
      content: '<p>1231231 123123 </p>',
      status: 'Show',
      isRequired: true,
      hasContent: true,
      createdAt: '2024-05-30T01:37:30.947Z',
      updatedAt: '2024-05-30T01:37:50.162Z',
      deletedAt: null,
    },
    {
      id: 'b5126aaf-9aeb-47fb-a79d-4057924c121e',
      slug: 'privacy-and-security',
      category: 'Privacy & Security',
      title: 'Privacy & Security',
      content: '<p><strong>Privacy &amp; Security</strong></p>',
      status: 'Show',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T09:10:06.693Z',
      updatedAt: '2024-06-02T15:02:20.068Z',
      deletedAt: null,
    },
    {
      id: '1',
      slug: 'privacy-and-security',
      category: 'Privacy & Security',
      title: 'Privacy & Security',
      content: '<p><strong>Privacy &amp; Security</strong></p>',
      status: 'Show',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T09:10:06.693Z',
      updatedAt: '2024-06-02T15:02:20.068Z',
      deletedAt: null,
    },
    {
      id: '2',
      slug: 'privacy-and-security',
      category: 'Privacy & Security',
      title: 'Privacy & Security',
      content: '<p><strong>Privacy &amp; Security</strong></p>',
      status: 'Show',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T09:10:06.693Z',
      updatedAt: '2024-06-02T15:02:20.068Z',
      deletedAt: null,
    },
    {
      id: '3',
      slug: 'privacy-and-security',
      category: 'Privacy & Security',
      title: 'Privacy & Security',
      content: '<p><strong>Privacy &amp; Security</strong></p>',
      status: 'Show',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T09:10:06.693Z',
      updatedAt: '2024-06-02T15:02:20.068Z',
      deletedAt: null,
    },
    {
      id: '4',
      slug: 'privacy-and-security',
      category: 'Privacy & Security',
      title: 'Privacy & Security',
      content: '<p><strong>Privacy &amp; Security</strong></p>',
      status: 'Show',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T09:10:06.693Z',
      updatedAt: '2024-06-02T15:02:20.068Z',
      deletedAt: null,
    },
    {
      id: '5',
      slug: 'privacy-and-security',
      category: 'Privacy & Security',
      title: 'Privacy & Security',
      content: '<p><strong>Privacy &amp; Security</strong></p>',
      status: 'Show',
      isRequired: false,
      hasContent: true,
      createdAt: '2024-05-29T09:10:06.693Z',
      updatedAt: '2024-06-02T15:02:20.068Z',
      deletedAt: null,
    },
  ];

  return (
    <TableContent
      head={head}
      initialBody={body}
    />
  );
}

export default Static;
