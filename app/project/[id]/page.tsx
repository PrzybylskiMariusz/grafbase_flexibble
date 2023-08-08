import { ProjectInterface } from "@/common.types";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";

const Project = async ({ params: { id } }: { params: { id: string } }) => {
	const session = await getCurrentUser();
	const result = (await getProjectDetails(id)) as {
		project?: ProjectInterface;
	};

	if (!result?.project)
		return <p className="no-result-text">Failed to fetch project info</p>;

	return <div>Project</div>;
};

export default Project;
