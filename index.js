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

export const locationName = detection => {
  return !!detection.location_area_name ? `${detection.asset_name}: ${detection.location_area_name}` : detection.asset_name
}

export const userHasSpecialAccess = user => user.email === 'itsd4';