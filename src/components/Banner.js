import { useNavigate } from 'react-router-dom';

export default function Banner({ data }) {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1>{data.title}</h1>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate(data.destination)}
      >
        {data.buttonLabel}
      </button>
    </div>
  );
}
