import { useQueryClient,useMutation } from "@tanstack/react-query";

import { adopt } from "../utils/api/pets";

export default function PetItem({ pet, handleAdopt }) {
  const queryClient = useQueryClient()
  const updatePet = useMutation(() => adopt(pet.id), {
    onSuccess: ()=> queryClient.invalidateQueries(['pets'])
  })
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} style={{border: pet.adopted && ' 5px solid #FF0000'}}/>
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info"
            onClick={updatePet.mutate}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}
