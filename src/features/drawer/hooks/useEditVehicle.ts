import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Leads from '../../../services/leads';
import { VehicleFormData } from '../state/vehicleSlice';

export function useEditVehicle() {
  // const queryClient = useQueryClient();
  const { mutate: editVehicle, isPending } = useMutation({
    mutationFn: (formData: VehicleFormData) => Leads.vehicleEditFake(formData),
    onSuccess: () => {
      toast.success('Vehicle successfully edited');
      // queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, editVehicle };
}
