export const detectionState = detection => {
  if (detection.annotation_actions.length == 0) {
    return null;
  }
  detection.annotation_actions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const latestState = detection.annotation_actions[0];
  latestState.isPending = latestState.state == 'in-progress';
  latestState.isResolve = latestState.state == 'resolve';
  return latestState;
}