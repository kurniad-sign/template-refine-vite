import { useNavigation } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { Button } from '@heroui/react';

export const CategoryCreate = () => {
  const { list } = useNavigation();

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Create</h1>
        <div>
          <button
            onClick={() => {
              list('categories');
            }}
          >
            List
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onFinish)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <label>
            <span style={{ marginRight: '8px' }}>Title</span>
            <input
              type="text"
              {...register('title', {
                required: 'This field is required',
              })}
            />
            <span style={{ color: 'red' }}>
              {(errors as any)?.title?.message as string}
            </span>
          </label>
          <div>
            <Button type="submit" color="primary">
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
